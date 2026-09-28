/**
 * A problem the project hit and how it was solved: subtle panel, mono accent label, Archivo title, then Problem / Rozwiązanie / Rezultat rows (mono label | text, hairlines). The result row is set in the default ink. Rows stack at ≤768px.
 */
export interface ChallengeBlockProps {
  /** Mono label above the title, e.g. "Wyzwanie 01" */
  label?: string;
  title?: string;
  problem?: string;
  solution?: string;
  /** Keep it measurable: "Błędy spadły o 95%" */
  result?: string;
}
export declare function ChallengeBlock(props: ChallengeBlockProps): JSX.Element;
