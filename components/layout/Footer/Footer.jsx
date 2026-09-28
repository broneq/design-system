import React from 'react';
import { Logo } from '../Header/Header.jsx';
import { LiveBadge } from '../../core/LiveBadge/LiveBadge.jsx';
const DEFAULT_LINKS = [{ href: '/o-mnie', label: 'O mnie' }, { href: '/uslugi', label: 'Usługi' }, { href: '/wiedza', label: 'Wiedza' }, { href: '/kontakt', label: 'Kontakt' }];
export function Footer({ links = DEFAULT_LINKS, onNavigate, tagline = 'Architektura, procesy i AI w cyklu wytwarzania oprogramowania.', status, linkedin = 'https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/', email, year = new Date().getFullYear() }) {
  const nav = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <footer className="bn-footer bn-dark bn-grid">
      <div className="container">
        <div className="grid">
          <div><Logo onClick={nav('/')} /><p className="tagline">{tagline}</p>{status && <LiveBadge>{status}</LiveBadge>}</div>
          <nav aria-labelledby="bn-footer-nav"><h2 id="bn-footer-nav" className="head">Nawigacja</h2><ul>{links.map((l) => <li key={l.href}><a href={l.href} onClick={nav(l.href)}>{l.label}</a></li>)}</ul></nav>
          <div><h2 className="head">Kontakt</h2><ul className="social">{email && <li><a href={'mailto:' + email}>{email}</a></li>}<li><a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li></ul></div>
        </div>
        <div className="mega" aria-hidden="true">Broniszewski<span className="dot">.</span></div>
        <div className="bottom"><span>&copy; {year} broniszewski.net</span><a href="/polityka-prywatnosci" onClick={nav('/polityka-prywatnosci')}>Polityka prywatności</a></div>
      </div>
    </footer>
  );
}
