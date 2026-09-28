import type { MouseEventHandler } from 'react';
/**
 * Borderless card: 16:10 hairline-framed image (zooms on hover), mono tags, Archivo 700 title, 3-line excerpt, mono "↗" link.
 */
export interface CaseStudyCardProps {
  title: string;
  href?: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  readMore?: string;
  onClick?: MouseEventHandler;
}
export declare function CaseStudyCard(props: CaseStudyCardProps): JSX.Element;
