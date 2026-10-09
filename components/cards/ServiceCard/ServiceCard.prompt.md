Hairline card for a process step or an offer: number (01, 02…) and an optional icon, title, short description, checklist and an optional link.

```jsx
<ServiceCard number={1} title="Diagnoza" description="Mapa procesu i baseline metryk." points={['Warsztat z zespołem', 'Pomiar lead time']} />
<ServiceCard icon="fa-diagram-project" title="Pilotaż AI w SDLC" description="…" cta="Zobacz program" link="/uslugi/pilotaz" />
```

Process steps go in `li.bn-step` under a one-segment `Segments` bar, lit only on the highlighted step.

Use `plain` for deliverables on a page built from hairlines (e.g. "Co dostajesz" on the service page): no box, a 2px top rule like Stat, number only (skip `icon`).

```jsx
<ServiceCard plain number={1} title="Mapa procesu" description="..." points={['Warsztat z zespołem']} />
```
