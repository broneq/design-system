import React from 'react';
import { CheckList } from '../../core/CheckList/CheckList.jsx';
export function ServiceCard({ number, icon, title, description, points = [], cta, link = '#', onClick, plain = false }) {
  return (
    <article className={'bn-service-card' + (plain ? ' bn-service-card--plain' : '')}>
      <div className="head">
        {number != null ? <span className="num">{String(number).padStart(2, '0')}</span> : <span></span>}
        {icon && <span className="bn-icon-box"><i className={'fa ' + icon} aria-hidden="true"></i></span>}
      </div>
      <h3 className="title">{title}</h3>
      <div className="body">
        {description && <p style={{ marginBottom: points.length ? 16 : 0 }}>{description}</p>}
        {points.length > 0 && <CheckList items={points} />}
      </div>
      {cta && <a href={link} className="link" onClick={onClick}>{cta} →</a>}
    </article>
  );
}
