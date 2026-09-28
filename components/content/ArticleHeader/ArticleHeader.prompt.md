Top of a blog post or case study. It stays compact so the title, excerpt, meta and the top of the cover fit on a laptop screen; put results and details in the article body, not here. The title and text line up with the `ArticleLayout` prose column.

```jsx
<ArticleHeader back={{ label: 'Wszystkie case studies', href: '/case-studies' }} eyebrow="Case study · Logistyka"
  title="Od arkuszy do automatyzacji." excerpt="Osiem lat budowy systemu TMS od podstaw."
  meta={['2015-2023', 'Architekt i lider projektu', '12 min czytania']} cover="/img/tms.jpg" />
```

Keep meta to 2-4 short items. Without `cover` the dark block ends with a hairline.
