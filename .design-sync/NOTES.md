# design-sync notes

- This repo is a native mirror of the Claude Design project "Broniszewski v2 - Design System"
  (`db82bcca-731e-4c59-8732-4f44acf463ea`; bundle namespace `BroniszewskiDesignSystem_db82bc`).
  The repo already holds the upload format (`_ds_bundle.js` v4, `_ds_manifest.json`, `*.card.html`
  with `@dsCard` first lines), so do not run the design-sync converter (`package-build.mjs`) - it
  would replace this layout. Sync = upload tracked repo files 1:1.
- Before syncing: `npm run check` must report the bundle up to date (`npm run build` otherwise).
- Verify: serve with `npm run serve`, open every `components/**/*.card.html`, `guidelines/*.html`
  and `ui_kits/website/index.html`; `window.BroniszewskiDesignSystem_db82bc.__errors` must be empty
  and no image broken. Check cards at their `@dsCard` viewport (`chrome-devtools-axi emulate --viewport "WxHx1"`; `resize` does not change `innerWidth`) - ArticleToc's collapsible variant
  only shows at <=1024px.
- Never upload local tooling: `package.json`, `package-lock.json`, `scripts/`, `.githooks/`,
  `.claude/`, `.design-sync/`, `DEVELOPMENT.md`, `.gitignore`, `node_modules/`, and the Claude Code
  plugin: `.claude-plugin/`, `skills/`.
- Deletes: remote paths absent from `git ls-files` (except app-owned `.thumbnail` files and
  `_ds_needs_recompile`). Write the `_ds_needs_recompile` sentinel before and after uploading.
- Binaries (`uploads/`, `assets/images/`, `templates/*/.thumbnail`) can be skipped when
  `git diff` since the last sync shows no change.
- No `_ds_sync.json` anchor: this layout has no converter hashes, so each sync re-diffs by git.
- No `readmeHeader`/conventions.md: README.md is hand-authored and already carries the
  conventions the design agent reads.
- Last sync: 2026-09-28 from commit 49d353f.
