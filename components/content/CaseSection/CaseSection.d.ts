import type { ReactNode } from 'react';
/**
 * One chapter of a case study on the container grid: hairline top, mono number + Archivo title in a 1/3 column (sticky on desktop), prose in the 2/3 column (ArticleLayout typography). Stacks at ≤768px.
 */
export interface CaseSectionProps {
  /** Chapter number, rendered as "01" */
  index?: number;
  /** Short chapter name: "Kontekst", "Problem", "Co zrobiłem", "Efekt" */
  title: string;
  /** Prose: p, ol, ul, strong, a */
  children?: ReactNode;
}
export declare function CaseSection(props: CaseSectionProps): JSX.Element;
