/**
 * Sticky 88px solid header: skip link, Archivo wordmark with blue period, Geist 15px links (current = blue dot + aria-current), small mono CTA. Light or dark. ≤1024px the hamburger opens a full-screen dark grid menu (aria-modal, focus trapped, Escape closes, focus returns to the toggle): numbered links without the CTA target, then LiveBadge, block CTA and contact links.
 */
export interface HeaderProps {
  links?: { href: string; label: string }[];
  current?: string;
  onNavigate?: (href: string) => void;
  ctaLabel?: string;
  ctaHref?: string;
  /** Use on top of the dark hero */
  dark?: boolean;
  /** Small mono text left of CTA, e.g. "PL / EN" */
  extra?: string;
  /** Target of the "Przejdź do treści" skip link; the page's <main> needs this id. Pass null to omit. Default "#main" */
  skipTo?: string | null;
  /** Mobile menu: availability line (LiveBadge) above the CTA */
  status?: string;
  /** Mobile menu: contact links under the CTA */
  email?: string;
  linkedin?: string;
}
export declare function Header(props: HeaderProps): JSX.Element;
/** Wordmark "Broniszewski" + blue period (Archivo 800). */
export interface LogoProps { onClick?: (e: any) => void }
export declare function Logo(props: LogoProps): JSX.Element;
