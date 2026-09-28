import React from 'react';
export function CaseFacts({ items = [] }) {
  return (
    <dl className="bn-facts">
      {items.map((it) => <div key={it.label} className="row"><dt>{it.label}</dt><dd>{it.value}</dd></div>)}
    </dl>
  );
}
