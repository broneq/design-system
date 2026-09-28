import React from 'react';
export function CaseStudyCard({ title, href = '#', excerpt, image, meta = [], featured = false, readMore = 'Zobacz case study', onClick }) {
  return (
    <a href={href} className={'bn-case-card' + (featured ? ' bn-case-card--featured' : '')} onClick={onClick}>
      <div className="media">{image && <img src={image} alt="" loading={featured ? undefined : 'lazy'} />}</div>
      {meta.length > 0 && <ul className="meta">{meta.map((m) => <li key={m}>{m}</li>)}</ul>}
      <h3 className="title">{title}</h3>
      {excerpt && <p className="excerpt">{excerpt}</p>}
      <span className="read-more">{readMore} <span className="arrow" aria-hidden="true">→</span></span>
    </a>
  );
}
