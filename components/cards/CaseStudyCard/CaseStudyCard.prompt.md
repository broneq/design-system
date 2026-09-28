Clickable case-study / blog post preview; lives in `.bn-cols--3` (2 columns ≤1024px with a lone last card laid out horizontally, 1 column ≤768px).

```jsx
<CaseStudyCard title="Od arkuszy do automatyzacji." excerpt="Osiem lat budowy systemu TMS od podstaw." image="assets/images/tms.png" meta={['Logistyka', '5 min czytania']} href="/case-studies/…" />
```

Inside `.bn-cols` the cards share rows (media, meta, title, excerpt, link) so titles and links line up - give every card in a grid both `meta` and `excerpt`. Keep meta to the sector and reading time; the tech stack belongs in the article's tags.

A listing opens with the newest post as `featured` on its own row, above the grid of the rest:

```jsx
<CaseStudyCard featured title="…" excerpt="…" image="…" meta={['Logistyka', '5 min czytania']} />
<div className="bn-cols bn-cols--3">…</div>
```

Hover (pointer devices only): image zooms, title turns blue, the link arrow nudges right.
