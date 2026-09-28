Site header. Also exports `Logo` (the text wordmark — there is no image logo).

```jsx
<Header current="/case-studies" onNavigate={go} status="Wolne terminy od listopada" email="kontakt@broniszewski.net" linkedin="https://www.linkedin.com/in/…" />
<main id="main">…</main>
```

The first focusable element is a "Przejdź do treści" skip link pointing at `#main` (`skipTo`), so give the page's `<main>` that id.

On ≤1024px the hamburger opens a full-screen menu. It lists `links` numbered 01, 02, … and skips the one equal to `ctaHref`, because the CTA below already leads there. `status`, `email` and `linkedin` fill the bottom of the menu; pass the same values as to `Footer`.
