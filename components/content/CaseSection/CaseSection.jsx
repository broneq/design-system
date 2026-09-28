import React from 'react';
export function CaseSection({ index, title, children }) {
  const id = React.useId();
  return (
    <section className="bn-case-section" aria-labelledby={id}>
      <div className="head">
        {index != null && <span className="num" aria-hidden="true">{String(index).padStart(2, '0')}</span>}
        <h2 className="title" id={id}>{title}</h2>
      </div>
      <div className="bn-article body">{children}</div>
    </section>
  );
}
