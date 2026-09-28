import React from 'react';
export function CheckList({ items, className }) {
  return <ul className={['list-check', className].filter(Boolean).join(' ')}>{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
}
