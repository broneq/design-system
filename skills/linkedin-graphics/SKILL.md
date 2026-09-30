---
name: linkedin-graphics
description: Creates on-brand LinkedIn graphics for Przemysław Broniszewski (Broniszewski.) from the design system templates - single posts 4:5 and 1:1, carousels (PNG slides plus the PDF LinkedIn takes) and the profile banner - rendered to files with headless Chrome. Use when asked for a graphic, image, visual, carousel or banner for a LinkedIn post, or to turn a post draft into slides.
---

# LinkedIn graphics

Slides are plain HTML that reuses a template's markup and CSS. You copy a layout, change its text, and render it. Do not write new CSS or new layouts: the templates already carry the brand.

The renderer needs Node 18+ and Google Chrome (or `CHROME_PATH`). Run it as:

```sh
R="${CLAUDE_PLUGIN_ROOT}/skills/linkedin-graphics/scripts/render.mjs"
node "$R" layouts <template>          # numbered list of layouts
node "$R" layout <template> <n>       # markup of layout n
node "$R" render <template> <slides.html> [--out <base>] [--pdf|--no-pdf]
```

| Template | Size | Use |
|---|---|---|
| `linkedin-post` | 1080x1350 | Default for a single-image post (4:5 takes the most feed space) |
| `linkedin-post-square` | 1080x1080 | Same 20 layouts, 1:1 |
| `linkedin-carousel` | 1080x1350 | Document post; writes a PDF next to the PNGs |
| `linkedin-banner` | 1584x396 | Profile banner |

## Workflow

1. Read the post draft. Write the graphic's text before touching markup: one idea, a headline of 2-5 words per line and at most 3 lines, and it must add something the post text does not already say.
2. Choose a layout by content (post layouts; the carousel has its own list, check `layouts`):
   - thesis or opinion: 01 Manifest, 18 Notatka tekstowa (short story)
   - about me or a personal take: 02 Portret na błękicie, 04 Pas portretowy
   - quote: 03 Cytat
   - one number or result: 05 Jedna liczba, 10 Case study ze zdjęciem
   - before and after: 06 Przed i po; myth against fact: 13 Mit i fakt
   - prompt or code: 07 Terminal
   - process or steps: 08 Mapa procesu, 15 Oś czasu, 09 Checklista
   - architecture: 11 Rysunek techniczny, 20 Duotone
   - poll: 12 Ankieta; event: 14 Wydarzenie; definition: 16 Słownik
   - blog or newsletter teaser: 17 Okładka notatki; data: 19 Wykres
3. Print the layout with `layout` and save it in the user's project, next to the post (for example `posts/<slug>/graphic.html`). A carousel file holds one slide element per slide, in order.
4. Edit only text, the inline `--h` / `--t` sizes, list items and image `src`. Keep every class. Keep the footer wordmark `Broniszewski<span class="lp-pd">.</span>`.
5. Render, then look at every PNG with the Read tool. Fix and re-render until it is clean. Exit code 2 plus a `warning:` line means text sticks out of the frame: shorten the text or lower `--h` / `--t`. The check does not catch text that fits but looks cramped, so still look.
6. Report the output paths. For a carousel, the PDF is the file to upload.

## Brand rules that apply to the text

The full rules are in `${CLAUDE_PLUGIN_ROOT}/README.md` (Content fundamentals). The short version:

- Polish, first person singular ("Pomagam", "Zaczynam"), reader as "Ty" or "Wasz zespół". Never "my".
- Headlines end with the blue period `<span class="lp-pd">.</span>` (or `?` in the same span). Sentence case, no exclamation marks, no emoji, no hype words.
- Labels are `// Eyebrow` in sentence case; CSS makes them uppercase.
- Numbers only when they carry proof. Mark sample data as sample data.
- Orange (`lp-dot`, `lp-on` in segments) is a signal: at most once per slide.

## Details that are easy to get wrong

- **Headline size.** `--h` is the headline size at 4:5. Longer text needs a smaller value; the square template scales it by 0.8 on its own. Balance lines by size, not with `<br>`.
- **Carousel progress.** Every slide repeats the counter (`<b>03</b> / 08`), the segment bar (`--n:8` and one `<i>` per slide: `lp-done` before, `lp-on` for the current one, empty after) and the eyebrow. Update all three when the slide count changes. The first slide is a cover (layout 1 or its portrait variant), the last one is the CTA.
- **Images.** A relative `src` resolves against the slides file first, then the template folder, so `img/profile.jpg` (the portrait) and the stock photos keep working. Use the user's own photo when the post is about a specific project; one photo per slide.
- **Banner.** Keep text on the right. LinkedIn covers the bottom-left ~560x200 px with the profile photo.
