import type { ReactNode } from 'react';
/**
 * Key facts of a project as a definition list: 2px line-strong top rule, hairline rows, mono uppercase label | value. Sits in PageHeader `aside` on a case study.
 */
export interface CaseFactsProps {
  /** 3-5 rows, e.g. Klient, Okres, Rola, Stack. `value` can be a node such as <TagList> */
  items: { label: string; value: ReactNode }[];
}
export declare function CaseFacts(props: CaseFactsProps): JSX.Element;
