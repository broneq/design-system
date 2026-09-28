import type { ReactNode, MouseEventHandler } from 'react';
/**
 * Mono uppercase CTA (JetBrains Mono 13px, 0.12em), 2px radius, 16×24 padding. Works on light and .bn-dark.
 */
export interface ButtonProps {
  /** primary = blue fill; secondary = hairline border; inverse = white fill (on blue/photo); link = text only. Legacy 'outline'/'white-outline' map to secondary/inverse. */
  variant?: 'primary' | 'secondary' | 'inverse' | 'link' | 'outline' | 'white-outline';
  size?: 'md' | 'sm';
  /** true = "→", or pass a glyph such as "↗" */
  arrow?: boolean | string;
  as?: 'a' | 'button';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
