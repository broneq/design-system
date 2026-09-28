import React from 'react';
// Marks the last chapter whose heading has reached the upper third of the viewport,
// so a chapter counts as current as soon as it is the one being read, not only once its heading hits the header.
function useCurrent(ids) {
  const [current, setCurrent] = React.useState(ids[0]);
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let next = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) next = id;
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
export function ArticleToc({ items = [], title = 'Spis treści', collapsible = false }) {
  const current = useCurrent(items.map((it) => it.id));
  const details = React.useRef(null);
  const list = (
    <ol>
      {items.map((it, i) => (
        <li key={it.id}>
          <a href={'#' + it.id} aria-current={it.id === current ? 'true' : undefined}
            onClick={(e) => {
              const el = document.getElementById(it.id);
              if (!el) return;
              e.preventDefault();
              if (details.current) details.current.open = false;
              el.scrollIntoView();
            }}>
            <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{it.label}
          </a>
        </li>
      ))}
    </ol>
  );
  if (collapsible) {
    return (
      <nav className="bn-toc bn-toc--collapsible" aria-label={title}>
        <details ref={details}>
          <summary className="head">{title}<span className="count">{String(items.length).padStart(2, '0')}</span></summary>
          {list}
        </details>
      </nav>
    );
  }
  return (
    <nav className="bn-toc" aria-label={title}>
      <p className="head">{title}</p>
      {list}
    </nav>
  );
}
