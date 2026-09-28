import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
const DEFAULT_LINKS = [{ href: '/o-mnie', label: 'O mnie' }, { href: '/uslugi', label: 'Usługi' }, { href: '/doswiadczenie', label: 'Doświadczenie' }, { href: '/wiedza', label: 'Wiedza' }];
export function Logo({ onClick }) {
  return <a className="bn-logo" href="/" onClick={onClick}>Broniszewski<span className="dot">.</span></a>;
}
export function Header({ links = DEFAULT_LINKS, current, onNavigate, ctaLabel = 'Porozmawiajmy', ctaHref = '/kontakt', dark = false, extra, skipTo = '#main' }) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const closeRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    closeRef.current.focus();
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); root.style.overflow = ''; if (toggleRef.current) toggleRef.current.focus(); };
  }, [open]);
  const nav = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } setOpen(false); };
  return (
    <header className={'bn-header' + (dark ? ' bn-dark' : '')}>
      {skipTo && <a className="bn-skip-link" href={skipTo}>Przejdź do treści</a>}
      <div className="container inner">
        <Logo onClick={nav('/')} />
        <nav aria-label="Główna nawigacja"><ul>{links.map((l) => <li key={l.href}><a href={l.href} className={current === l.href ? 'current' : ''} aria-current={current === l.href ? 'page' : undefined} onClick={nav(l.href)}>{l.label}</a></li>)}</ul></nav>
        <div className="right">
          {extra && <span className="extra bn-label">{extra}</span>}
          <Button size="sm" href={ctaHref} onClick={nav(ctaHref)}>{ctaLabel}</Button>
          <button ref={toggleRef} className="hamburger" aria-label="Otwórz menu" aria-expanded={open} aria-controls="bn-mobile-menu" onClick={() => setOpen(true)}><i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
      </div>
      {open && <div className="bn-scrim" aria-hidden="true" onClick={() => setOpen(false)} />}
      <div id="bn-mobile-menu" className={'bn-mobile-menu' + (open ? ' open' : '')} role="dialog" aria-label="Menu mobilne">
        <button ref={closeRef} className="close" aria-label="Zamknij menu" onClick={() => setOpen(false)}>&times;</button>
        <ul>{links.map((l) => <li key={l.href}><a href={l.href} aria-current={current === l.href ? 'page' : undefined} onClick={nav(l.href)}>{l.label}</a></li>)}</ul>
        <Button block href={ctaHref} onClick={nav(ctaHref)}>{ctaLabel}</Button>
      </div>
    </header>
  );
}
