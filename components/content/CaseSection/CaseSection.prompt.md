Chapter of a case study. Stack them inside a `.container`; each draws its own hairline top rule. The usual story is Kontekst, Problem, Co zrobiłem, Efekt - always end with the outcome.

```jsx
<div className="container">
  <CaseSection index={1} title="Kontekst"><p>Firma planowała kursy w arkuszach…</p></CaseSection>
  <CaseSection index={3} title="Co zrobiłem"><ul><li>Zmapowałem proces…</li></ul></CaseSection>
  <CaseSection index={4} title="Efekt"><p className="lead">Dwóch planistów zamiast sześciu.</p></CaseSection>
</div>
```

Chapters are already numbered, so list steps inside one with `ul`, not `ol`. Open the Efekt chapter with `<p className="lead">` for the headline outcome.

Put a `PullQuote` band between chapters rather than a blockquote inside one.
