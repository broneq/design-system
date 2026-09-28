import React from 'react';
// Marks the last chapter whose heading has scrolled past the sticky header.
function useCurrent(ids) {
  const [current, setCurrent] = React.useState(ids[0]);
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      let next = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line + 1) next = id;
      }
      setCurrent(next);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, [ids.join('|')]);
  return current;
}
export function ArticleToc({ items = [], title = 'Spis treści' }) {
  const current = useCurrent(items.map((it) => it.id));
  return (
    <nav className="bn-toc" aria-label={title}>
      <p className="head">{title}</p>
      <ol>
        {items.map((it, i) => (
          <li key={it.id}>
            <a href={'#' + it.id} aria-current={it.id === current ? 'true' : undefined}
              onClick={(e) => { const el = document.getElementById(it.id); if (el) { e.preventDefault(); el.scrollIntoView(); } }}>
              <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
