/**
 * Sticky 88px translucent header (blur): Archivo wordmark with blue period, Geist 15px links (current = orange dot), small mono CTA. Light or dark; drawer ≤860px.
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
}
export declare function Header(props: HeaderProps): JSX.Element;
/** Wordmark "Broniszewski" + blue period (Archivo 800). */
export interface LogoProps { onClick?: (e: any) => void }
export declare function Logo(props: LogoProps): JSX.Element;
