import type { MouseEventHandler } from 'react';
/**
 * Engagement format, no box: 2px line-strong top rule, mono duration, Archivo title, who it's for, scope checklist, mono link.
 * `featured` turns the rule blue and adds a badge next to the duration. In a `.bn-cols` row the parts line up across cards (subgrid).
 */
export interface CooperationCardProps {
  title: string;
  /** Mono label above the title, e.g. "6–10 tygodni" */
  duration: string;
  /** Who it's for, one sentence */
  ideal?: string;
  scope?: string[];
  /** The main offer: blue top rule + badge */
  featured?: boolean;
  /** Badge text on a featured card */
  badge?: string;
  link?: string;
  linkLabel?: string;
  onClick?: MouseEventHandler;
}
export declare function CooperationCard(props: CooperationCardProps): JSX.Element;
