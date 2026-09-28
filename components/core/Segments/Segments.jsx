import React from 'react';
export function Segments({ count, current = 0, done, labels, className, style }) {
  const n = count || (labels ? labels.length : 4);
  const doneUntil = done == null ? current : done;
  return (
    <div className={['bn-segments', className].filter(Boolean).join(' ')} style={style} role="progressbar" aria-valuemin={1} aria-valuemax={n} aria-valuenow={current + 1}>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className={i === current ? 'current' : i < doneUntil ? 'done' : ''}>
          <span className="bar"></span>{labels && labels[i] && <span className="lbl">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}
export function Counter({ current = 1, total = 1, className }) {
  const p = (x) => String(x).padStart(2, '0');
  return <span className={['bn-counter', className].filter(Boolean).join(' ')}><b>{p(current)}</b> / {p(total)}</span>;
}
