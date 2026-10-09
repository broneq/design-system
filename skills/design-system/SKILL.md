---
name: design-system
description: Applies the Broniszewski. design system (Przemysław Broniszewski's brand - dark-first, Archivo headlines with a blue period, // mono labels, blue accent, orange signal) to work in any project - websites, landing pages, React components, slide decks, PDF offers, HTML mocks and prototypes. Use when asked to build, style or review something "in our design system", "on brand" or "like broniszewski.net". Not for LinkedIn graphics; use linkedin-graphics for those.
---

# Broniszewski. design system

The design system lives in this plugin, at `${CLAUDE_PLUGIN_ROOT}`. You work in another project and take what it needs from there. Reuse the system's CSS and components. Do not restyle them and do not invent new tokens.

## 1. Learn the brand

Read `${CLAUDE_PLUGIN_ROOT}/README.md` in full before you design anything. It is the source of truth for tone, color, type, layout, motifs and accessibility. Then read only what the task needs:

| Need | Where |
|---|---|
| Tokens (color, type, spacing, radii, motion) | `${CLAUDE_PLUGIN_ROOT}/tokens/*.css`, entry point `${CLAUDE_PLUGIN_ROOT}/styles.css` |
| A component | `${CLAUDE_PLUGIN_ROOT}/components/<group>/<Name>/`: `.d.ts` (props), `.jsx` (markup and classes), `.prompt.md` (usage), `.card.html` (rendered variants) |
| Foundation rules with examples | `${CLAUDE_PLUGIN_ROOT}/guidelines/*.html` |
| Whole pages composed from components | `${CLAUDE_PLUGIN_ROOT}/ui_kits/website/*.jsx` and its `README.md` |
| Slides, PDF offer | `${CLAUDE_PLUGIN_ROOT}/templates/slides/Slides.dc.html`, `${CLAUDE_PLUGIN_ROOT}/templates/offer-pdf/OfferPdf.dc.html` |

When `.prompt.md` disagrees with `.d.ts` or `.jsx`, the code wins.

## 2. Pick the integration

Decide from the target project's stack, and tell the user which path you chose:

- **Plain HTML/CSS, or any framework that takes global CSS** (Astro, Vue, Svelte, server templates): copy `styles.css` and `tokens/` into the project and load `styles.css` once. Write markup with the `bn-` classes, copied from the component's `.jsx`.
- **React**: copy the CSS as above, plus the `.jsx` and `.d.ts` files of the components you use. Copy their imports too (Button, Eyebrow, LiveBadge, Tag, CheckList and others): the relative paths `../../core/...` must keep resolving, so keep the `components/<group>/<Name>/` layout.
- **Tailwind or another token-driven setup**: map the CSS custom properties from `tokens/` into the config (colors, fonts, spacing, radii). Keep the semantic names (`--fg-default`, `--accent-fill`, `--signal`), not raw hex values. Port component markup class by class.
- **Throwaway mock or artifact**: one self-contained HTML file that inlines `styles.css` and `tokens/` and the markup it needs.

Copy files into the project; never link to `${CLAUDE_PLUGIN_ROOT}`, because that path changes with every plugin update. Put a short comment at the top of the copied CSS that names the source: "Broniszewski. design system v2, copied from the broniszewski-design plugin". Fonts load from Google Fonts in `tokens/fonts.css`; for production, offer to self-host them.

## 3. Build

- Compose from existing components and utility classes first (`.container`, `.section`, `.bn-cols`, `.bn-grid`, `.bn-section-row`, `.bn-dark`). The README names which one fits which job.
- When nothing fits, build the new piece from semantic tokens only, in the system's idiom: hairlines instead of shadows, 2-4px radii, mono uppercase labels. Tell the user it is new, so it can go back into the design system.
- Write copy by the README's content rules: Polish unless the project says otherwise, first person singular, sentence case, headlines that end with the blue period, verb-first CTAs, no hype, no exclamation marks, no emoji.
- Never edit the design system files inside the plugin. A change to the system itself is made in its own repo.

## 4. Check before you finish

Render the result in a browser and look at it at 390, 768, 1024 and 1440 px wide, in the light theme and in `.bn-dark` where the page uses it. Fix what you see. Then confirm:

- Every headline ends with the blue period (`?` in the same accent span is allowed).
- Orange `--signal` appears at most once per view, only as the live dot or the current segment.
- `--accent-fill` carries text on blue surfaces; `--accent` is only for marks.
- Columns use `.bn-cols`, not hand-written `grid-template-columns`; the only breakpoints are 1024px and 768px.
- Focus outlines are visible, touch targets are at least 44px, and `prefers-reduced-motion` turns motion off.
- No gradients except the portrait fade, no shadows on screen UI, no colors outside the tokens.
