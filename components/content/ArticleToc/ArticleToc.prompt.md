Chapter list for a long article: a sticky rail beside the prose, or with `collapsible` a closed list above it (ArticleLayout renders both and CSS shows one per breakpoint). Usually you don't render it yourself - pass `toc` to `ArticleLayout`. Labels are the h2 texts, short enough for two lines at 180-230px. Links scroll in-page, so they work under hash routing too.

```jsx
<ArticleToc items={[{ id: 'punkt-wyjscia', label: 'Punkt wyjścia' }, { id: 'wyzwania', label: 'Wyzwania' }]} />
```
