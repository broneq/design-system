#!/usr/bin/env node
// Renders LinkedIn graphics from the design system templates with headless Chrome.
// No npm dependencies: slides are plain HTML that reuses a template's CSS.
//
//   render.mjs layouts <template>              list the template's layouts
//   render.mjs layout <template> <n>           print layout n's markup (starting point for a new slide)
//   render.mjs render <template> <slides.html> [--out <base>] [--pdf|--no-pdf]
//
// slides.html holds one or more top-level slide elements. Each one becomes a PNG
// (<base>.png, or <base>-01.png... for several); --pdf also writes <base>.pdf,
// one slide per page, which is what LinkedIn takes for a carousel.

import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const DS_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

const TEMPLATES = {
  'linkedin-post': { file: 'templates/linkedin-post/LinkedinPost.dc.html', width: 1080, height: 1350, pdf: false },
  'linkedin-post-square': { file: 'templates/linkedin-post-square/LinkedinPostSquare.dc.html', width: 1080, height: 1080, pdf: false },
  'linkedin-carousel': { file: 'templates/linkedin-carousel/LinkedinCarousel.dc.html', width: 1080, height: 1350, pdf: true },
  'linkedin-banner': { file: 'templates/linkedin-banner/LinkedinBanner.dc.html', width: 1584, height: 396, pdf: false },
};

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

function fail(message) {
  console.error(`render: ${message}`);
  process.exit(1);
}

function loadTemplate(name) {
  const template = TEMPLATES[name];
  if (!template) fail(`unknown template "${name}". Use one of: ${Object.keys(TEMPLATES).join(', ')}`);
  const path = join(DS_ROOT, template.file);
  return { ...template, name, path, dir: dirname(path), source: readFileSync(path, 'utf8') };
}

// Top-level elements of an HTML fragment as { start, end } offsets. Good enough for
// the hand-written markup in the templates and slides; not a general HTML parser.
function topLevelElements(html, limit = Infinity) {
  const tag = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)(?:"[^"]*"|'[^']*'|[^'">])*?(\/?)>/g;
  const elements = [];
  let depth = 0;
  let start = 0;
  for (const m of html.matchAll(tag)) {
    if (elements.length >= limit) break;
    if (!m[2]) continue;
    const [text, closing, name, selfClosing] = m;
    if (closing) {
      depth--;
      if (depth === 0) elements.push({ start, end: m.index + text.length });
      if (depth < 0) fail(`unbalanced </${name}> at offset ${m.index}`);
    } else if (VOID_TAGS.has(name.toLowerCase()) || selfClosing) {
      if (depth === 0) elements.push({ start: m.index, end: m.index + text.length });
    } else {
      if (depth === 0) start = m.index;
      depth++;
    }
  }
  if (depth !== 0 && elements.length < limit) fail('unclosed element in slide markup');
  return elements.map(({ start, end }) => html.slice(start, end));
}

function templateLayouts(template) {
  const body = template.source.replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  const layouts = [];
  const opening = /<([a-zA-Z][\w-]*)\s[^>]*data-screen-label="([^"]*)"/g;
  for (const m of body.matchAll(opening)) {
    const [markup] = topLevelElements(body.slice(m.index), 1);
    layouts.push({ label: m[2], markup });
  }
  return layouts;
}

function templateStyles(template) {
  const helmet = template.source.match(/<helmet>([\s\S]*?)<\/helmet>/);
  return helmet ? helmet[1].replace(/<script\b[\s\S]*?<\/script>/g, '') : '';
}

// Relative image paths are resolved against the slides file first, then the template
// folder (img/profile.jpg and the other stock photos live there).
function absolutizeSources(html, inputDir, templateDir) {
  return html.replace(/\bsrc="([^"]+)"/g, (whole, src) => {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(src)) return whole;
    const candidates = isAbsolute(src) ? [src] : [resolve(inputDir, src), resolve(templateDir, src)];
    const found = candidates.find((path) => existsSync(path));
    if (!found) fail(`image not found: ${src} (looked in ${candidates.join(', ')})`);
    return `src="${pathToFileURL(found).href}"`;
  });
}

function page(template, slides, extraCss) {
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="${pathToFileURL(join(DS_ROOT, 'styles.css')).href}">
${templateStyles(template)}
<style>
html,body{margin:0;padding:0;background:#fff}
#slides>*{margin:0 !important}
${extraCss}
</style>
</head>
<body><div id="slides">
${slides.join('\n')}
</div></body>
</html>`;
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ].filter(Boolean);
  const found = candidates.find((path) => existsSync(path));
  if (found) return found;
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    const which = spawnSync('which', [name], { encoding: 'utf8' });
    if (which.status === 0) return which.stdout.trim();
  }
  fail('Chrome not found. Install Google Chrome or set CHROME_PATH.');
}

function chrome(args, url) {
  // The virtual time budget lets web fonts and images finish loading before capture.
  const base = ['--headless', '--hide-scrollbars', '--force-device-scale-factor=1', '--virtual-time-budget=10000', '--no-first-run', '--no-default-browser-check'];
  return execFileSync(findChrome(), [...base, ...args, url], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
}

// Text that ends up outside its slide is cut off by overflow:hidden, so it is easy to
// miss in the PNG. Reports every element with its own text that sticks out.
const OVERFLOW_PROBE = `<script>
addEventListener('load', () => document.fonts.ready.then(() => {
  const report = [...document.querySelectorAll('#slides>*')].map((slide, i) => {
    const box = slide.getBoundingClientRect();
    const out = [...slide.querySelectorAll('*')].filter((el) => {
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.bottom > box.bottom + 1 || r.right > box.right + 1 || r.top < box.top - 1 || r.left < box.left - 1);
    }).map((el) => el.textContent.trim().slice(0, 60));
    return { slide: i + 1, out };
  });
  document.body.setAttribute('data-overflow', JSON.stringify(report));
}));
</script>`;

function checkOverflow(template, slides, workDir) {
  const file = join(workDir, 'probe.html');
  const css = `#slides{display:flex;flex-direction:column;align-items:flex-start}`;
  writeFileSync(file, page(template, slides, css).replace('</body>', `${OVERFLOW_PROBE}</body>`));
  const dom = chrome(['--dump-dom', `--window-size=${template.width},${template.height}`], pathToFileURL(file).href);
  const match = dom.match(/data-overflow="([^"]*)"/);
  if (!match) return [];
  return JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')).filter((s) => s.out.length);
}

function render(templateName, inputPath, options) {
  const template = loadTemplate(templateName);
  const input = resolve(inputPath);
  if (!existsSync(input)) fail(`slides file not found: ${inputPath}`);
  const html = absolutizeSources(readFileSync(input, 'utf8'), dirname(input), template.dir);
  const slides = topLevelElements(html);
  if (!slides.length) fail(`no slide elements in ${inputPath}`);

  const base = resolve(options.out ?? input.replace(/\.html?$/i, ''));
  mkdirSync(dirname(base), { recursive: true });
  const workDir = mkdtempSync(join(tmpdir(), 'bn-render-'));
  const outputs = [];
  try {
    slides.forEach((_, i) => {
      const file = join(workDir, `slide-${i + 1}.html`);
      writeFileSync(file, page(template, slides, `#slides>:not(:nth-child(${i + 1})){display:none}`));
      const png = slides.length === 1 ? `${base}.png` : `${base}-${String(i + 1).padStart(2, '0')}.png`;
      chrome([`--screenshot=${png}`, `--window-size=${template.width},${template.height}`], pathToFileURL(file).href);
      if (!existsSync(png)) fail(`Chrome did not write ${png}`);
      outputs.push(png);
    });

    if (options.pdf ?? template.pdf) {
      const file = join(workDir, 'slides.html');
      const css = `@page{size:${template.width}px ${template.height}px;margin:0}
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}
#slides>*{break-after:page}`;
      writeFileSync(file, page(template, slides, css));
      const pdf = `${base}.pdf`;
      chrome([`--print-to-pdf=${pdf}`, '--no-pdf-header-footer'], pathToFileURL(file).href);
      if (!existsSync(pdf)) fail(`Chrome did not write ${pdf}`);
      outputs.push(pdf);
    }

    for (const path of outputs) console.log(path);
    const overflow = checkOverflow(template, slides, workDir);
    for (const { slide, out } of overflow) {
      console.error(`warning: slide ${slide}: text outside the ${template.width}x${template.height} frame: ${out.map((t) => JSON.stringify(t)).join(', ')}`);
    }
    if (overflow.length) process.exitCode = 2;
  } finally {
    rmSync(workDir, { recursive: true, force: true });
  }
}

function parseOptions(args) {
  const options = {};
  const positional = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--out') options.out = args[++i];
    else if (args[i] === '--pdf') options.pdf = true;
    else if (args[i] === '--no-pdf') options.pdf = false;
    else if (args[i].startsWith('--')) fail(`unknown option ${args[i]}`);
    else positional.push(args[i]);
  }
  return { options, positional };
}

const USAGE = `usage:
  render.mjs layouts <template>
  render.mjs layout <template> <n>
  render.mjs render <template> <slides.html> [--out <base>] [--pdf|--no-pdf]
templates: ${Object.keys(TEMPLATES).join(', ')}`;

const [command, ...rest] = process.argv.slice(2);
const { options, positional } = parseOptions(rest);

if (command === 'layouts' && positional.length === 1) {
  const template = loadTemplate(positional[0]);
  console.log(`${template.name} - ${template.width}x${template.height}`);
  templateLayouts(template).forEach(({ label }, i) => console.log(`${i + 1}\t${label}`));
} else if (command === 'layout' && positional.length === 2) {
  const layouts = templateLayouts(loadTemplate(positional[0]));
  const layout = layouts[Number(positional[1]) - 1];
  if (!layout) fail(`layout ${positional[1]} does not exist (1-${layouts.length})`);
  console.log(layout.markup);
} else if (command === 'render' && positional.length === 2) {
  render(positional[0], positional[1], options);
} else {
  console.error(USAGE);
  process.exit(1);
}
