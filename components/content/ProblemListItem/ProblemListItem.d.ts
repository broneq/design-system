import type { ReactNode } from 'react';
/** 20px/500 pain-point row with hairline top rule and blue arrow marker. Place inside a <ul>. */
export interface ProblemListItemProps { text: string; marker?: string }
export declare function ProblemListItem(props: ProblemListItemProps): JSX.Element;
/** Centered Archivo 700 24px line between two hairlines. */
export interface TextSeparatorProps { children?: ReactNode }
export declare function TextSeparator(props: TextSeparatorProps): JSX.Element;
