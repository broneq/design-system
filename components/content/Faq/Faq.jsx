import React from 'react';
// Native <details>: works without JS, keyboard and screen-reader friendly, several answers can stay open.
export function Faq({ items = [] }) {
  return (
    <div className="bn-faq">
      {items.map((it) => (
        <details key={it.q} className="item">
          <summary className="q">{it.q}</summary>
          <div className="a"><p>{it.a}</p></div>
        </details>
      ))}
    </div>
  );
}
