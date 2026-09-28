PageHeader — top of every subpage (Usługi, Case studies, a case study, Kontakt). Dark grid by default, left-aligned. Keep titles short and end them with a period - it renders blue. Sentence case, never Title Case.

```jsx
<PageHeader eyebrow="Kontakt" title="Porozmawiajmy." subtitle="30 minut o tym, jak dziś wygląda Wasz proces." />
<PageHeader size="md" eyebrow="Case study · Logistyka" title="Od arkuszy do systemu TMS." subtitle="..." tags={['TMS', 'Automatyzacja']} />
```

Pass the page's primary CTA as `actions` when the page is an offer (e.g. Usługa), so readers don't have to scroll to the footer CTA:

```jsx
<PageHeader eyebrow="Usługa" title="Pilotaż AI w SDLC." subtitle="..." actions={<Button href="/kontakt" arrow>Umów rozmowę</Button>} />
```

Don't repeat the subtitle in `tags`. Use `size="md"` when the title runs past ~6 words (articles, case studies).
