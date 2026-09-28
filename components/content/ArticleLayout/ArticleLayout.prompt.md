720px prose wrapper - put raw h2/h3/p/ul/ol/blockquote/code inside and it styles them. Place it inside a `.container` so it keeps the side gutter on mobile. `p.lead` sets a larger opening paragraph.

```jsx
<ArticleLayout>
  <h2>Punkt wyjścia</h2>
  <p className="lead">…</p>
  <p>…</p>
  <blockquote><p>„Spędzałem 3 godziny dziennie na dzwonieniu do kierowców.”</p><footer>Główny spedytor</footer></blockquote>
</ArticleLayout>
```

Blockquotes here are short in-text quotes (accent rule on the left, title size). For the one big client quote of a page use `PullQuote` in its own band.
