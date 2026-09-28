import type { ReactNode } from 'react';
/**
 * One readable timeline row: mono period | Archivo title + mono org | description or list | status chip. Renders an <li>; stacks at ≤1024px with the status chip on the period line. Use for experience and process phases.
 */
export interface TimelineItemProps {
  /** Period or step label, e.g. "2019–2024" */
  label?: string;
  /** Alternative to label: renders "Krok 01" */
  step?: number;
  stepPrefix?: string;
  title: string;
  /** Company / context line (mono uppercase) */
  meta?: string;
  description?: string;
  items?: string[];
  /** Right-hand chip, e.g. "5 lat" or "Teraz". When no row has one, the timeline drops the status column. */
  status?: string;
  /** Marks the row: accent segment over the label, accent label, inverted status chip */
  current?: boolean;
}
export declare function TimelineItem(props: TimelineItemProps): JSX.Element;
/** Ordered list wrapper: 2px top rule in line-strong. */
export interface TimelineProps { children?: ReactNode }
export declare function Timeline(props: TimelineProps): JSX.Element;
