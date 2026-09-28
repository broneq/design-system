import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow.jsx';
import { TagList } from '../Tag/Tag.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function PageHeader({ title, subtitle, eyebrow, tags, dark = true, size = 'lg', back, aside, children }) {
  return (
    <header className={'bn-page-header bn-grid' + (size === 'md' ? ' bn-page-header--md' : '') + (aside ? ' bn-page-header--aside' : '') + (dark ? ' bn-dark' : '')}>
      <div className="container inner">
        <div className="main">
          {back && <a className="back" href={back.href} onClick={back.onClick}><span aria-hidden="true">←</span>{back.label}</a>}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="page-title">{withDot(title)}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
          {tags && tags.length > 0 && <TagList items={tags} />}
        </div>
        {aside && <div className="aside">{aside}</div>}
      </div>
      {children && <div className="container extra">{children}</div>}
    </header>
  );
}
