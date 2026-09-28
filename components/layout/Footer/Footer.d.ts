/**
 * Dark grid footer: wordmark + tagline + optional LiveBadge, nav, contact; giant Archivo "Broniszewski." wordmark; mono copyright bar.
 */
export interface FooterProps {
  links?: { href: string; label: string }[];
  onNavigate?: (href: string) => void;
  tagline?: string;
  /** Availability line with orange dot */
  status?: string;
  linkedin?: string;
  email?: string;
  year?: number;
}
export declare function Footer(props: FooterProps): JSX.Element;
