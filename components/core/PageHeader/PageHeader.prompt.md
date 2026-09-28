PageHeader — top of every subpage (Usługi, Case studies, a case study, Kontakt). Dark grid by default, left-aligned. Keep titles short and end them with a period - it renders blue. Sentence case, never Title Case.

```jsx
<PageHeader eyebrow="Kontakt" title="Porozmawiajmy." subtitle="30 minut o tym, jak dziś wygląda Wasz proces." />
<PageHeader size="md" eyebrow="Case study · Logistyka" title="Od arkuszy do systemu TMS." subtitle="..." tags={['TMS', 'Automatyzacja']} />
```

Use `size="md"` when the title runs past ~6 words (articles, case studies).
