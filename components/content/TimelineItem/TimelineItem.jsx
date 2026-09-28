import React from 'react';
import { Tag } from '../../core/Tag/Tag.jsx';
export function TimelineItem({ label, step, stepPrefix = 'Krok', title, meta, description, items, status, current }) {
  const lbl = label || (step != null ? stepPrefix + ' ' + String(step).padStart(2, '0') : '');
  return (
    <li className="bn-timeline-item">
      <div className="label">{lbl}</div>
      <div className="head"><h3 className="title">{title}</h3>{meta && <div className="meta">{meta}</div>}</div>
      <div className="desc">{description && <p>{description}</p>}{items && items.length > 0 && <ul className="list-check" style={{ marginTop: description ? 12 : 0 }}>{items.map((it, i) => <li key={i}>{it}</li>)}</ul>}</div>
      <div className="status">{status && <span className={'bn-tag' + (current ? ' now' : '')}>{status}</span>}</div>
    </li>
  );
}
export function Timeline({ children }) {
  return <ol className="bn-timeline">{children}</ol>;
}
