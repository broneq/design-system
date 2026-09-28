import type { MouseEventHandler } from 'react';
/**
 * Borderless card: 16:10 hairline-framed image (zooms on hover), mono meta line, Archivo 700 title, 3-line excerpt, mono "→" link. In .bn-cols cards share rows via subgrid (5 rows: media, meta, title, excerpt, link).
 * `featured` lays the card out horizontally across the full width (image left, text right; stacks at ≤768px) for the newest post at the top of a listing.
 */
export interface CaseStudyCardProps {
  title: string;
  href?: string;
  excerpt?: string;
  /** Decorative: the whole card is a link named by the title, so the image gets an empty alt */
  image?: string;
  /** Short facts joined by middots, e.g. ['Logistyka', '5 min czytania'] */
  meta?: string[];
  featured?: boolean;
  readMore?: string;
  onClick?: MouseEventHandler;
}
export declare function CaseStudyCard(props: CaseStudyCardProps): JSX.Element;
