The site's only button — use for every CTA (solid primary for the main action, outline for the secondary one).

```jsx
<Button href="/kontakt">Umów bezpłatną konsultację</Button>
<Button variant="outline" href="/case-studies">Zobacz realizacje</Button>
<Button as="button" type="submit">Wyślij Zapytanie</Button>
```

- `variant`: primary | outline | white-outline (on photo/dark backgrounds)
- `as="button"` for forms; `block` for full width (e.g. inside the CTA card)
- Header CTA is written in caps: "BEZPŁATNA KONSULTACJA"
