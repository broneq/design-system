import React from 'react';
import { CheckList } from '../../core/CheckList/CheckList.jsx';
import { Tag } from '../../core/Tag/Tag.jsx';
export function CooperationCard({ icon, title, subtitle, ideal, scope = '', examples = '', scopeHeading = 'Zakres' }) {
  const items = [...scope.split(','), ...examples.split(',')].map((i) => i.trim()).filter(Boolean);
  return (
    <article className="bn-coop-card">
      <header className="head">
        {icon && <span className="bn-icon-box"><i className={'fa ' + icon} aria-hidden="true"></i></span>}
        <div className="title-group">
          <h3 className="title">{title}</h3>
          {subtitle && <Tag variant="accent">{subtitle}</Tag>}
        </div>
      </header>
      {ideal && <p className="description">{ideal}</p>}
      {items.length > 0 && <><p className="scope-heading">{scopeHeading}</p><CheckList items={items} /></>}
    </article>
  );
}
