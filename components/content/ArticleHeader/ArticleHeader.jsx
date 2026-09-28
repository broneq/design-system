import React from 'react';
import { Eyebrow } from '../../core/Eyebrow/Eyebrow.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function ArticleHeader({ back, eyebrow, title, excerpt, meta = [], cover, coverAlt = '' }) {
  return (
    <header className={'bn-article-header' + (cover ? ' bn-article-header--cover' : '')}>
      <div className="top bn-dark bn-grid">
        <div className="container bn-article-grid">
          {back && <a className="back" href={back.href} onClick={back.onClick}><span aria-hidden="true">←</span>{back.label}</a>}
          <div className="main">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="title">{withDot(title)}</h1>
            {excerpt && <p className="excerpt">{excerpt}</p>}
            {meta.length > 0 && <ul className="meta">{meta.map((m) => <li key={m}>{m}</li>)}</ul>}
          </div>
        </div>
      </div>
      {cover && <div className="container"><figure className="cover"><img src={cover} alt={coverAlt} /></figure></div>}
    </header>
  );
}
