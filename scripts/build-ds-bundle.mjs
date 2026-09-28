// Rebuilds _ds_bundle.js from sources, reproducing the Claude Design bundle format (v4):
// - components/**/*.jsx are ES modules: imports resolve through a shared __ds_scope,
//   exports are exposed on window[namespace]; emitted in dependency order.
// - other .js/.jsx files (ui_kits) are plain scripts, emitted after components.
// Usage: node scripts/build-ds-bundle.mjs [--check]
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';
import presetReact from '@babel/preset-react';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLE = '_ds_bundle.js';
const SKIP_DIRS = new Set(['node_modules', 'scripts', 'templates', '.git', '.claude', '.bdk']);
const { namespace } = JSON.parse(readFileSync(join(ROOT, '_ds_manifest.json'), 'utf8'));

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.name.startsWith('.') || SKIP_DIRS.has(e.name)) return [];
    const p = join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.(jsx?|mjs)$/.test(e.name) && e.name !== BUNDLE ? [relative(ROOT, p).split('\\').join('/')] : [];
  });
}

const byPath = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
const files = walk(ROOT).sort(byPath);
const modules = files.filter((f) => f.startsWith('components/'));
const scripts = files.filter((f) => !f.startsWith('components/'));

// Rewrites a compiled module: drops imports (react is global, siblings come from __ds_scope)
// and strips export keywords, recording exported names in source order.
function scopePlugin(file, meta) {
  const { types: t } = babel;
  return {
    visitor: {
      Program(program) {
        for (const stmt of program.get('body')) {
          if (stmt.isImportDeclaration()) {
            const source = stmt.node.source.value;
            if (source !== 'react') {
              if (!source.startsWith('.')) throw new Error(`${file}: unsupported external import '${source}'`);
              meta.deps.push(posix.join(posix.dirname(file), source));
              for (const spec of stmt.node.specifiers) {
                if (!t.isImportSpecifier(spec)) throw new Error(`${file}: only named imports are supported`);
                const binding = stmt.scope.getBinding(spec.local.name);
                for (const ref of binding.referencePaths) {
                  ref.replaceWith(t.memberExpression(t.identifier('__ds_scope'), t.identifier(spec.imported.name)));
                }
              }
            }
            stmt.remove();
          } else if (stmt.isExportNamedDeclaration()) {
            const decl = stmt.node.declaration;
            if (decl) {
              const ids = t.getBindingIdentifiers(decl, false, true);
              meta.exports.push(...Object.keys(ids));
              stmt.replaceWith(decl);
            } else {
              meta.exports.push(...stmt.node.specifiers.map((s) => s.exported.name));
              stmt.remove();
            }
          } else if (stmt.isExportDefaultDeclaration() || stmt.isExportAllDeclaration()) {
            throw new Error(`${file}: default and star exports are not supported`);
          }
        }
      },
    },
  };
}

function compile(file, asModule) {
  const src = readFileSync(join(ROOT, file), 'utf8');
  const meta = { deps: [], exports: [] };
  const { ast } = babel.transformSync(src, {
    filename: file, babelrc: false, configFile: false, ast: true, code: false,
    sourceType: asModule ? 'module' : 'script',
    presets: [[presetReact, { runtime: 'classic' }]],
  });
  const { code } = babel.transformFromAstSync(ast, src, {
    filename: file, babelrc: false, configFile: false,
    plugins: asModule ? [() => scopePlugin(file, meta)] : [],
  });
  return { file, src, code, ...meta };
}

// Kahn's algorithm with the ready set ordered by path - matches Claude Design's emission order.
function topoSort(units) {
  const map = new Map(units.map((u) => [u.file, u]));
  const pending = new Map(units.map((u) => [u.file, new Set(u.deps)]));
  for (const [file, deps] of pending) {
    for (const d of deps) if (!map.has(d)) throw new Error(`${file}: import '${d}' not found`);
  }
  const out = [];
  while (pending.size) {
    const ready = [...pending].filter(([, deps]) => deps.size === 0).map(([f]) => f).sort(byPath);
    if (!ready.length) throw new Error(`import cycle among: ${[...pending.keys()].join(', ')}`);
    const next = ready[0];
    pending.delete(next);
    for (const deps of pending.values()) deps.delete(next);
    out.push(map.get(next));
  }
  return out;
}

const compiledModules = modules.map((f) => compile(f, true));
const ordered = [...topoSort(compiledModules), ...scripts.map((f) => compile(f, false))];

const components = compiledModules.flatMap((u) => u.exports.map((name) => ({ name, sourcePath: u.file })));
const seen = new Map();
for (const c of components) {
  if (seen.has(c.name)) throw new Error(`export '${c.name}' defined in both ${seen.get(c.name)} and ${c.sourcePath}`);
  seen.set(c.name, c.sourcePath);
}
const sourceHashes = Object.fromEntries(
  ordered.map((u) => u.file).sort(byPath).map((f) => [f, createHash('sha256').update(readFileSync(join(ROOT, f))).digest('hex').slice(0, 12)]),
);
const header = { format: 4, namespace, components, sourceHashes, inlinedExternals: [], unexposedExports: [] };

const entry = (u) => [
  `// ${u.file}`,
  'try { (() => {',
  u.code,
  ...(u.exports.length ? [`Object.assign(__ds_scope, { ${u.exports.join(', ')} });`] : []),
  `})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(u.file)}, error: String((e && e.message) || e) }); }`,
].join('\n');

const bundle = [
  `/* @ds-bundle: ${JSON.stringify(header)} */`,
  '(() => {',
  `const __ds_ns = (window.${namespace} = window.${namespace} || {});`,
  'const __ds_scope = {};',
  '(__ds_ns.__errors = __ds_ns.__errors || []);',
  ...ordered.map(entry),
  ...components.map((c) => `__ds_ns.${c.name} = __ds_scope.${c.name};`),
  '})();',
].join('\n\n') + '\n';

const target = join(ROOT, BUNDLE);
if (process.argv.includes('--check')) {
  if (readFileSync(target, 'utf8') !== bundle) {
    console.error(`${BUNDLE} is out of date - run: npm run build`);
    process.exit(1);
  }
  console.log(`${BUNDLE} is up to date`);
} else {
  writeFileSync(target, bundle);
  console.log(`${BUNDLE}: ${ordered.length} files, ${components.length} components`);
}
