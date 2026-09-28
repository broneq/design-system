import type { ReactNode } from 'react';
/**
 * Dark grid hero: eyebrow, Archivo 800 display title (fluid 64–150px, trailing "." in blue), lead, CTAs, orange LiveBadge; portrait/avatar fills the right 56% and fades into the page.
 */
export interface HeroProps {
  eyebrow?: string;
  /** String or array of lines (each line may end with ".") */
  title: string | string[];
  subheading?: string;
  primaryCta?: { label: string; href?: string; onClick?: (e: any) => void };
  secondaryCta?: { label: string; href?: string; onClick?: (e: any) => void };
  /** LiveBadge text, e.g. "Wolne terminy od listopada" */
  status?: string;
  tags?: string[];
  /** @deprecated use tags */
  trust?: string[];
  image?: string;
  imageAlt?: string;
  dark?: boolean;
  children?: ReactNode;
}
export declare function Hero(props: HeroProps): JSX.Element;
