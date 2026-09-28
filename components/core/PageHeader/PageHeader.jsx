import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow.jsx';
import { TagList } from '../Tag/Tag.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function PageHeader({ title, subtitle, eyebrow, tags, dark = true, size = 'lg' }) {
  return (
    <header className={'bn-page-header bn-grid' + (size === 'md' ? ' bn-page-header--md' : '') + (dark ? ' bn-dark' : '')}>
      <div className="container inner">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="page-title">{withDot(title)}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        {tags && tags.length > 0 && <TagList items={tags} />}
      </div>
    </header>
  );
}
