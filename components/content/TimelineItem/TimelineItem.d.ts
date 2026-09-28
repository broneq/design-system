import type { ReactNode } from 'react';
/**
 * One readable timeline row: mono period | Archivo title + mono org | description or list | status chip. Stacks under 900px. Use for experience and process steps.
 */
export interface TimelineItemProps {
  /** Period or step label, e.g. "2019 — 2024" */
  label?: string;
  /** Alternative to label: renders "Krok 01" */
  step?: number;
  stepPrefix?: string;
  title: string;
  /** Company / context line (mono uppercase) */
  meta?: string;
  description?: string;
  items?: string[];
  /** Right-hand chip, e.g. "5 lat" or "Teraz" */
  status?: string;
  /** Inverts the status chip (current role) */
  current?: boolean;
}
export declare function TimelineItem(props: TimelineItemProps): JSX.Element;
/** Wrapper: 2px top rule in line-strong. */
export interface TimelineProps { children?: ReactNode }
export declare function Timeline(props: TimelineProps): JSX.Element;
