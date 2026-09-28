Service offering - icon + title + three "Jak …?" questions + arrow link.

```jsx
<ServiceCard icon="fa-gears" title="Projektowanie i wdrażanie procesów IT"
  points={['Jak skalować zespół techniczny bez utraty wydajności?', '…']}
  cta="Uporządkuj procesy w firmie" link="/uslugi/…" />
```

Use `plain` for deliverables on a page built from hairlines (e.g. "Co dostajesz" on the service page): no box, a 2px top rule like Stat, number only (skip `icon`).

```jsx
<ServiceCard plain number={1} title="Mapa procesu" description="..." points={['Warsztat z zespołem']} />
```
