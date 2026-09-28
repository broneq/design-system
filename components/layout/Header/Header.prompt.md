Site header. Also exports `Logo` (the text wordmark — there is no image logo).

```jsx
<Header current="/case-studies" onNavigate={go} />
<main id="main">…</main>
```

The first focusable element is a "Przejdź do treści" skip link pointing at `#main` (`skipTo`), so give the page's `<main>` that id.
