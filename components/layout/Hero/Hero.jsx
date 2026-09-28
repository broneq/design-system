import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
import { Eyebrow } from '../../core/Eyebrow/Eyebrow.jsx';
import { LiveBadge } from '../../core/LiveBadge/LiveBadge.jsx';
import { TagList } from '../../core/Tag/Tag.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function Hero({ eyebrow, title, subheading, primaryCta, secondaryCta, status, tags, trust, image, imageAlt = '', dark = true, children }) {
  const lines = Array.isArray(title) ? title : [title];
  const t = tags || trust;
  return (
    <section className={'bn-hero bn-grid' + (dark ? ' bn-dark' : '')}>
      {image && <div className="media"><img src={image} alt={imageAlt} /></div>}
      {image && <div className="fade"></div>}
      <div className="container"><div className="content fade-in">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1>{lines.map((l, i) => <React.Fragment key={i}>{i > 0 && <br />}{withDot(l)}</React.Fragment>)}</h1>
        {subheading && <p className="lead">{subheading}</p>}
        {(primaryCta || secondaryCta) && <div className="cta-group">
          {primaryCta && <Button href={primaryCta.href} onClick={primaryCta.onClick} arrow>{primaryCta.label}</Button>}
          {secondaryCta && <Button variant="secondary" href={secondaryCta.href} onClick={secondaryCta.onClick}>{secondaryCta.label}</Button>}
        </div>}
        {status && <div className="status"><LiveBadge>{status}</LiveBadge></div>}
        {t && t.length > 0 && <div className="tags"><TagList items={t} /></div>}
        {children}
      </div></div>
    </section>
  );
}
