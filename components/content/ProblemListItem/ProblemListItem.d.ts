import type { ReactNode } from 'react';
/** 20px/500 pain-point row with hairline rules and blue arrow marker (the last row also closes the list with a bottom rule). Place inside a <ul>. */
export interface ProblemListItemProps { text: string; marker?: string }
export declare function ProblemListItem(props: ProblemListItemProps): JSX.Element;
/** Closing statement under a problem list: left-aligned Archivo 800, 24-32px, trailing period in blue. */
export interface TextSeparatorProps { children?: ReactNode }
export declare function TextSeparator(props: TextSeparatorProps): JSX.Element;
