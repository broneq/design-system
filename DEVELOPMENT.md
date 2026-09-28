# Local development

The local repo is the source of truth. Claude Design (claude.ai/design) receives changes through `/design-sync`.

## Setup

```sh
npm install   # also points git hooks at .githooks/
npm run serve # http://127.0.0.1:4321
```

Open `ui_kits/website/index.html`, `components/**/*.card.html`, `guidelines/*.html` and `templates/**/*.dc.html` to preview.

## Editing

- `tokens/*.css` - changes show on reload.
- `components/**/*.jsx`, `ui_kits/**/*.jsx` - previews load the compiled `_ds_bundle.js`, not the sources. Run `npm run build` after editing, then reload.
- A component change means updating all four files together: `.jsx`, `.d.ts`, `.prompt.md`, `.card.html`.

`scripts/build-ds-bundle.mjs` reproduces the Claude Design bundle format (v4) byte-for-byte. The pre-commit hook runs `npm run check` and blocks commits where the bundle is stale.

## Syncing to Claude Design

Run `/design-sync` in Claude Code. Do not upload local-only tooling: `package.json`, `package-lock.json`, `scripts/`, `.githooks/`, `node_modules/`, `DEVELOPMENT.md`.
