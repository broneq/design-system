/**
 * Proof metric: 2px line-strong top rule, Archivo 800 value (fluid 40–64px), mono uppercase label, optional Geist note. Lay out in .bn-cols.
 */
export interface StatProps {
  /** The number, with its unit: "3×", "<50 ms", "−35%" */
  value: string;
  /** What was measured, e.g. "Lead time" */
  label: string;
  /** Context that makes the number honest, e.g. "Zespół 12 osób, 8 tygodni" */
  note?: string;
}
export declare function Stat(props: StatProps): JSX.Element;
