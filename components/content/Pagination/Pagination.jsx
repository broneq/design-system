import React from 'react';
export function Pagination({ current = 1, total = 1, onChange, prevLabel = '← Poprzednia', nextLabel = 'Następna →' }) {
  const go = (n) => onChange && onChange(n);
  return (
    <nav className="bn-pagination" aria-label="Paginacja">
      <button className="nav-link" style={{ visibility: current > 1 ? 'visible' : 'hidden' }} onClick={() => go(current - 1)}>{prevLabel}</button>
      <ul className="page-list">{Array.from({ length: total }, (_, i) => i + 1).map((n) => <li key={n}><button className={'page-num' + (n === current ? ' active' : '')} onClick={() => go(n)}>{String(n).padStart(2, '0')}</button></li>)}</ul>
      <button className="nav-link" style={{ visibility: current < total ? 'visible' : 'hidden' }} onClick={() => go(current + 1)}>{nextLabel}</button>
    </nav>
  );
}
