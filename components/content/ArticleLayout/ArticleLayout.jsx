import React from 'react';
import { ArticleToc } from '../ArticleToc/ArticleToc.jsx';
export function ArticleLayout({ toc, tocTitle, children }) {
  const article = <article className="bn-article">{children}</article>;
  if (!toc || !toc.length) return article;
  return (
    <div className="bn-article-grid">
      <ArticleToc items={toc} title={tocTitle} />
      <ArticleToc items={toc} title={tocTitle} collapsible />
      {article}
    </div>
  );
}
