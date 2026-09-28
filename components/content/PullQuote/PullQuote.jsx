import React from 'react';
export function PullQuote({ quote, author, role }) {
  return (
    <figure className="bn-pull-quote">
      <blockquote><p>„{quote}”</p></blockquote>
      {(author || role) && <figcaption>{author && <span className="author">{author}</span>}{role && <span className="role">{role}</span>}</figcaption>}
    </figure>
  );
}
