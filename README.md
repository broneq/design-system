# Broniszewski. — design system v2

Personal brand system for **Przemysław Broniszewski** — architect helping software teams redesign their process and bring AI into the SDLC. Used for the website, slide decks / workshops, PDF offers and LinkedIn (single posts, carousels, banner).

v2 (2026) replaces the v1 system extracted from `broneq/personal-website`. The blue stays; everything around it is modernised: dark-first, technical, editorial type.

## Brand in one paragraph
Dark ink surfaces on an 80px technical grid, a heavy tight **Archivo 800** headline that always ends with a **blue period**, Geist for reading, **JetBrains Mono** uppercase labels prefixed with `//`. Blue (#3D6BFF) carries every action. Orange (#FF6B3D) is a *signal* — a pulsing live dot, the current segment, the AI step — at most once per view. Corners are nearly square (2–4px). Imagery is a single avatar/portrait that fades into the dark page.

## Content fundamentals
- **Language:** Polish by default. First person singular ("Pomagam", "Projektuję"), address the reader as "Ty/Wasz zespół". Never "we".
- **Tone:** direct, concrete, engineering-literate. Short declarative headlines with a period. No hype words, no exclamation marks, no emoji.
- **Casing:** sentence case for headlines and body; mono labels & CTAs are uppercase via CSS — write them in sentence case in source.
- **Headlines:** 2–5 words per line, max 2–3 lines. Optional grey second line (`titleMuted`) for the "so what".
- **CTAs:** verb-first, 1–3 words: "Umów rozmowę", "Case studies", "Zobacz program".
- **Numbers:** only when they carry proof (weeks, team size). Numbered sections use "01 —".

## Visual foundations
- **Themes:** light (default) and `.bn-dark` — same semantic tokens flip. Hero, page headers, footer, slides and banner are dark; content sections are light; one blue band (FinalCTA) per page.
- **Color:** `--accent` (#3D6BFF) for marks - period, bars, bullets, current nav dot; `--accent-fill` (#2D5BFF) for surfaces that carry text - primary buttons, FinalCTA band; `--accent-text` for links. `--signal` orange is a marker with exactly two uses: the LiveBadge dot and the current Segment - never list markers, nav, or form marks. Ink scale 950→50 for everything else. No gradients except the portrait fade.
- **Type:** Archivo 800 display/H1/H2 (−0.045 to −0.055em, line-height .88–.95); Archivo 700 H3/H4; Geist 17/1.6 body, 18–21 lead; JetBrains Mono 13px/0.14em labels, 13px/0.12em CTAs.
- **Motifs:** (1) technical grid (`.bn-grid`, 80px / 40px `--sm`; `.bn-grid--fade` on light `.section--subtle` sections so they carry the same texture as the dark ones), (2) `//` eyebrow, (3) blue period, (4) LiveBadge orange dot, (5) Segments progress bars + 01/06 Counter — used on slides, carousels, process steps.
- **Layout:** 1312px container, 20–64px fluid side padding, fluid section rhythm (`--section-y` 72→120px, `--section-y-tight` 48→72px, `--section-head-gap` 40→64px between 390px and 1200px), left-aligned. Multi-column content uses `.bn-cols` (`--2`/`--3`/`--4`/`--split`, gap via `--cols-gap`): `--3`/`--4` drop to 2 columns ≤1024px (an odd last `--3` item spans the full row), everything is 1 column ≤768px - never hand-written `grid-template-columns`. `.bn-cols--fixed` keeps a `--3`/`--4` count at 769-1024px for short items (stats, plain cards). `.bn-cols--mobile-reverse` puts the last column first on mobile (e.g. the contact form before the "what happens next" steps). Breakpoints are only 1024px and 768px. A section header with an action beside it goes in `.bn-section-row`; process steps are `li.bn-step` (a one-segment `Segments` bar as the top edge of a `ServiceCard`, lit only on the highlighted step); prev/next links at the end of an article use `nav.bn-post-nav` inside a `.container.bn-article-grid`, so they line up with the prose column (`a.prev`/`a.next` with `.dir` + `.title`). Direct contact links under a column go in `.bn-contact-direct` (Eyebrow, 44px-tall links, LiveBadge). Text only for screen readers uses `.bn-sr-only`. A source line under stats is `p.bn-footnote`; a list under its own Eyebrow gets `ul.bn-fit-list`. Grids use hairlines (1px `--line-default`, 2px `--line-strong` for table tops) rather than shadows.
- **Radii:** 2px buttons/tags/inputs, 4px cards/images, 12px frames for slides & social. Pills only for dots.
- **Shadows:** none on screen UI; `--shadow-doc` for paper previews, `--shadow-pop` for popovers.
- **Motion:** 150–250ms ease-out; fade-in-up 16px on enter; LiveBadge pulses. Respect reduced motion.
- **Imagery:** one avatar (illustrated or dark-lit portrait) per surface, right-aligned, fading into the page. Project images in hairline 4px frames.
- **Icons:** Font Awesome 6.4 solid in a 44px hairline `.bn-icon-box`; functional only.

## Accessibility
- Text pairs meet WCAG AA 4.5:1 in both themes; UI boundaries (input borders `--line-input`, focus) meet 3:1.
- Focus: every `:focus-visible` gets a 2px solid `--focus-color` outline with 2px offset (white on the blue band). Never replace it with a translucent shadow.
- Header renders a "Przejdź do treści" skip link to `#main`; `scroll-padding-top` keeps focused/anchored content clear of the sticky header.
- Touch targets are at least 44×44px on coarse pointers.
- `prefers-reduced-motion` disables animation, transitions and smooth scroll.

## Components
Core: Button, Eyebrow, Tag, TagList, LiveBadge, Segments, Counter, Stat, SectionHeader, PageHeader (`size` lg / md), CheckList.
Cards: CaseStudyCard, ServiceCard, CooperationCard (engagement formats as a ladder, one `featured`).
Content: Timeline, TimelineItem, ProblemListItem, TextSeparator, ArticleHeader, ArticleLayout (with `toc`: sticky ArticleToc beside the prose), ArticleToc, ArticleImage, PullQuote, ChallengeBlock, Pagination, Faq.
Forms: ContactForm.
Layout: Header, Logo, Hero, FinalCTA, Footer.

## Files
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects, base, components)
- `components/<group>/<Name>/` — one folder per component: `.jsx`, `.d.ts`, `.prompt.md`, `.card.html` (groups: core, cards, content, forms, layout)
- `guidelines/` — foundation cards (colors, type, spacing, brand)
- `templates/` — slides, LinkedIn post/carousel/banner, PDF offer
- `ui_kits/website/` — website screens
- `explorations/` — archive of redesign direction boards (v1, v2); not part of the system

## Caveats
- Fonts load from Google Fonts (Archivo, Geist, JetBrains Mono); self-host for production.
- Avatar artwork is not included — slots are left for it.
