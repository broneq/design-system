import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function FinalCTA({ title = 'Porozmawiajmy o Twoim zespole.', intro, eyebrow = 'Podczas rozmowy', points = [], avatar, invitation = '30 minut, bez zobowiązań', author = 'Przemysław Broniszewski', ctaLabel = 'Umów rozmowę', ctaHref = '/kontakt', onCta, note }) {
  return (
    <section className="bn-final-cta bn-grid">
      <div className="container grid">
        <div>
          <h2>{withDot(title)}</h2>
          {intro && <p className="intro">{intro}</p>}
          {points.length > 0 && <><p className="eyebrow">// {eyebrow}</p><ul>{points.map((p, i) => <li key={i}>{p}</li>)}</ul></>}
        </div>
        <div className="card">
          <div className="trust">{avatar ? <img className="avatar" src={avatar} alt={author} /> : <span className="avatar"></span>}<div><p className="invite">{invitation}</p><p className="author">{author}</p></div></div>
          <Button block href={ctaHref} onClick={onCta} arrow>{ctaLabel}</Button>
          {note && <p className="next">{note}</p>}
        </div>
      </div>
    </section>
  );
}
