720px prose wrapper - put raw h2/h3/p/ul/ol/blockquote/code inside and it styles them. Place it inside a `.container` so it keeps the side gutter on mobile. `p.lead` sets a larger opening paragraph.

A blog post or case study passes `toc` and gives every h2 a matching id. An h2 separates chapters with a hairline; an optional `span.num` sets the chapter number above the title.

```jsx
<div className="container bn-article-body">
  <ArticleLayout toc={[{ id: 'punkt-wyjscia', label: 'Punkt wyjścia' }, { id: 'wyzwania', label: 'Wyzwania' }]}>
    <h2 id="punkt-wyjscia"><span className="num" aria-hidden="true">01</span>Punkt wyjścia</h2>
    <p className="lead">…</p>
    <p>…</p>
    <blockquote><p>„Spędzałem 3 godziny dziennie na dzwonieniu do kierowców.”</p><footer>Główny spedytor</footer></blockquote>
    <h2 id="wyzwania"><span className="num" aria-hidden="true">02</span>Wyzwania</h2>
    …
  </ArticleLayout>
</div>
```

Blockquotes are short in-text quotes (accent rule on the left, title size); keep them to two or three per article. For the one big quote use `PullQuote`. Results fit as a `.bn-cols.bn-cols--3` row of `Stat` inside the prose. Content blocks with their own container (post navigation) use `.bn-article-grid` so they line up with the prose.
