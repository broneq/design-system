import type { MouseEventHandler } from 'react';
/**
 * Hairline card (4px radius, 32px pad): mono number + optional FA icon box, Archivo 700 title, text/checklist, mono link. Border darkens on hover.
 */
export interface ServiceCardProps {
  /** Renders as 01, 02… */
  number?: number;
  /** Font Awesome class, e.g. "fa-diagram-project" */
  icon?: string;
  title: string;
  description?: string;
  points?: string[];
  cta?: string;
  link?: string;
  onClick?: MouseEventHandler;
  /** No box: 2px line-strong top rule on the page background, like Stat. Use for deliverables listed next to hairline sections. */
  plain?: boolean;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
