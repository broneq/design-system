import React from 'react';
import { CheckList } from '../../core/CheckList/CheckList.jsx';
import { Button } from '../../core/Button/Button.jsx';
export function CooperationCard({ title, duration, ideal, scope = [], featured = false, badge = 'Główna usługa', link, linkLabel = 'Szczegóły', onClick }) {
  return (
    <article className={'bn-coop-card' + (featured ? ' bn-coop-card--featured' : '')}>
      <p className="duration"><span>{duration}</span>{featured && <span className="badge">{badge}</span>}</p>
      <h3 className="title">{title}</h3>
      {ideal && <p className="description">{ideal}</p>}
      {scope.length > 0 && <CheckList items={scope} />}
      {link && <div className="link"><Button variant="link" href={link} onClick={onClick} arrow>{linkLabel}</Button></div>}
    </article>
  );
}
