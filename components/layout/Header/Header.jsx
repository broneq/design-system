import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
const DEFAULT_LINKS = [{ href: '/o-mnie', label: 'O mnie' }, { href: '/uslugi', label: 'Usługi' }, { href: '/doswiadczenie', label: 'Doświadczenie' }, { href: '/wiedza', label: 'Wiedza' }];
export function Logo({ onClick }) {
  return <a className="bn-logo" href="/" onClick={onClick}>Broniszewski<span className="dot">.</span></a>;
}
export function Header({ links = DEFAULT_LINKS, current, onNavigate, ctaLabel = 'Porozmawiajmy', ctaHref = '/kontakt', dark = false, extra }) {
  const [open, setOpen] = React.useState(false);
  const nav = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } setOpen(false); };
  return (
    <header className={'bn-header' + (dark ? ' bn-dark' : '')}>
      <div className="container inner">
        <Logo onClick={nav('/')} />
        <nav aria-label="Główna nawigacja"><ul>{links.map((l) => <li key={l.href}><a href={l.href} className={current === l.href ? 'current' : ''} onClick={nav(l.href)}>{l.label}</a></li>)}</ul></nav>
        <div className="right">
          {extra && <span className="extra bn-label">{extra}</span>}
          <Button size="sm" href={ctaHref} onClick={nav(ctaHref)}>{ctaLabel}</Button>
          <button className="hamburger" aria-label="Otwórz menu" onClick={() => setOpen(true)}><i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
      </div>
      <div className={'bn-mobile-menu' + (open ? ' open' : '')} aria-label="Menu mobilne">
        <button className="close" aria-label="Zamknij menu" onClick={() => setOpen(false)}>&times;</button>
        <ul>{links.map((l) => <li key={l.href}><a href={l.href} onClick={nav(l.href)}>{l.label}</a></li>)}</ul>
        <Button block href={ctaHref} onClick={nav(ctaHref)}>{ctaLabel}</Button>
      </div>
    </header>
  );
}
