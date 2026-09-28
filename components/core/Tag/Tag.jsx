import React from 'react';
export function Tag({ children, variant = 'outline', className }) {
  return <span className={['bn-tag', variant !== 'outline' && 'bn-tag--' + variant, className].filter(Boolean).join(' ')}>{children}</span>;
}
export function TagList({ items = [], variant }) {
  return <ul className="bn-tag-list">{items.map((t) => <li key={t}><Tag variant={variant}>{t}</Tag></li>)}</ul>;
}
