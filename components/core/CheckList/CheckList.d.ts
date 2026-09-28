import type { ReactNode } from 'react';
/** List with 6px blue square bullets (.list-check). */
export interface CheckListProps { items: ReactNode[]; className?: string }
export declare function CheckList(props: CheckListProps): JSX.Element;
