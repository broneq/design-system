Homepage hero: dark grid, display title, lead, two CTAs, LiveBadge and the portrait fading into the page on the right.

```jsx
<Hero eyebrow="Architekt · AI w SDLC" title={['Szybszy', 'SDLC.']}
  subheading="Architektura, procesy i AI w jednym. Pomagam zespołom deweloperskim dowozić szybciej bez utraty jakości."
  primaryCta={{ label: 'Umów rozmowę', href: '/kontakt' }}
  secondaryCta={{ label: 'Case studies', href: '/case-studies' }}
  status="Wolne terminy od listopada"
  image="assets/images/profile.png" />
```

- `title` as an array sets one line per item; keep it to 2-3 short lines, the last one ending in a period.
- `tags` for a few topic chips; `trust` is a deprecated alias.
- One Hero per site, on the homepage. Subpages use PageHeader.
