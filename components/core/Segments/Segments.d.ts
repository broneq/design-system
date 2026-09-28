/**
 * Segmented progress bar (3px bars, 8px gap). Done = full ink, current = orange signal, rest = 20%. Optional mono labels under each bar. Used on slides, carousels, process steps and the hero.
 */
export interface SegmentsProps {
  /** Number of segments (defaults to labels.length) */
  count?: number;
  /** 0-based index of the current (orange) segment */
  current?: number;
  /** Segments before this index render as done; defaults to current */
  done?: number;
  labels?: string[];
  className?: string;
  style?: any;
}
export declare function Segments(props: SegmentsProps): JSX.Element;
/** Mono "01 / 06" counter; current in full ink. */
export interface CounterProps { current?: number; total?: number; className?: string }
export declare function Counter(props: CounterProps): JSX.Element;
