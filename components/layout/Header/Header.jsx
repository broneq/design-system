import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
import { LiveBadge } from '../../core/LiveBadge/LiveBadge.jsx';
const DEFAULT_LINKS = [{ href: '/o-mnie', label: 'O mnie' }, { href: '/uslugi', label: 'Usługi' }, { href: '/doswiadczenie', label: 'Doświadczenie' }, { href: '/wiedza', label: 'Wiedza' }];
const FOCUSABLE = 'a[href], button:not([disabled])';
export function Logo({ onClick }) {
  return <a className="bn-logo" href="/" onClick={onClick}>Broniszewski<span className="dot">.</span></a>;
}
export function Header({ links = DEFAULT_LINKS, current, onNavigate, ctaLabel = 'Porozmawiajmy', ctaHref = '/kontakt', dark = false, extra, skipTo = '#main', status, email, linkedin }) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const menuRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    closeRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key !== 'Tab') return;
      // Keep focus inside the open menu (aria-modal)
      const items = menuRef.current.querySelectorAll(FOCUSABLE);
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); root.style.overflow = ''; if (toggleRef.current) toggleRef.current.focus(); };
  }, [open]);
  const nav = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } setOpen(false); };
  // The CTA already leads to ctaHref, so the menu list skips that link
  const menuLinks = links.filter((l) => l.href !== ctaHref);
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
      <div ref={menuRef} id="bn-mobile-menu" className={'bn-mobile-menu bn-dark bn-grid' + (open ? ' open' : '')} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="container inner">
          <Logo onClick={nav('/')} />
          <button ref={closeRef} className="close" aria-label="Zamknij menu" onClick={() => setOpen(false)}><i className="fa fa-xmark" aria-hidden="true"></i></button>
        </div>
        <div className="container body">
          <nav aria-label="Menu mobilne"><ol>{menuLinks.map((l, i) => <li key={l.href} style={{ '--i': i }}><a href={l.href} aria-current={current === l.href ? 'page' : undefined} onClick={nav(l.href)}><span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{l.label}</a></li>)}</ol></nav>
          <div className="foot">
            {status && <LiveBadge>{status}</LiveBadge>}
            <Button block href={ctaHref} onClick={nav(ctaHref)} arrow>{ctaLabel}</Button>
            {(email || linkedin) && <ul className="contact">{email && <li><a href={'mailto:' + email}>{email}</a></li>}{linkedin && <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li>}</ul>}
          </div>
        </div>
      </div>
    </header>
  );
}
