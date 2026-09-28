import type { ReactNode } from 'react';
/**
 * Mono uppercase label (JetBrains Mono 13px, 0.14em) with a blue "//" prefix. Sits above every H1/H2, on slides, posts and documents.
 */
export interface EyebrowProps {
  children?: ReactNode;
  /** Prefix glyph, default "//". Use "01 —" style numbers for numbered sections, or null for none. */
  prefix?: string | null;
  /** muted = grey text (default); accent = blue text */
  tone?: 'muted' | 'accent';
  as?: 'p' | 'span' | 'div';
  className?: string;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
