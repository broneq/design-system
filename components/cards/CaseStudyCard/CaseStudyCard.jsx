import React from 'react';
import { TagList } from '../../core/Tag/Tag.jsx';
export function CaseStudyCard({ title, href = '#', excerpt, image, tags, readMore = 'Zobacz case study', onClick }) {
  return (
    <a href={href} className="bn-case-card" onClick={onClick}>
      <div className="media">{image && <img src={image} alt={title} loading="lazy" />}</div>
      {tags && tags.length > 0 && <TagList items={tags} />}
      <h3 className="title">{title}</h3>
      {excerpt && <p className="excerpt">{excerpt}</p>}
      <span className="read-more">{readMore} <span className="arrow" aria-hidden="true">→</span></span>
    </a>
  );
}
