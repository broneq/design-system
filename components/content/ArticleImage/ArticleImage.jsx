import React from 'react';
export function ArticleImage({ src, alt, caption }) {
  return (
    <figure className="bn-article-image">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
