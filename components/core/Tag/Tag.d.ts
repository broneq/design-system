import type { ReactNode } from 'react';
/**
 * Mono 12px chip with 2px radius. outline (default), filled (subtle bg) or accent (blue tint).
 */
export interface TagProps { children?: ReactNode; variant?: 'outline' | 'filled' | 'accent'; className?: string }
export declare function Tag(props: TagProps): JSX.Element;
/** Wrapping row of Tags. */
export interface TagListProps { items: string[]; variant?: 'outline' | 'filled' | 'accent' }
export declare function TagList(props: TagListProps): JSX.Element;
