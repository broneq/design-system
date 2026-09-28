Clickable case-study preview; lives in `.bn-cols--3` (2 columns ≤1024px with a lone last card laid out horizontally, 1 column ≤768px).

```jsx
<CaseStudyCard title="Od chaosu do kontroli…" excerpt="Telefon o 2:30 w nocy…" image="assets/images/kubernetes.png" tags={['Kubernetes','CI/CD']} href="/case-studies/…" />
```

Inside `.bn-cols` the cards share rows (media, tags, title, excerpt, link) so titles and links line up - give every card in a grid both `tags` and `excerpt`. Hover (pointer devices only): image zooms, title turns blue, the link arrow nudges right.
