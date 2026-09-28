import type { ReactNode } from 'react';
/**
 * Subpage banner on the technical grid (dark by default): optional back link, eyebrow, Archivo H1, lead, mono tags. Left-aligned. A title ending in "." gets the blue period.
 * `aside` adds a right-hand column (7/5 split, stacks at ≤1024px); `children` render below the title row, after a hairline (e.g. a row of Stat).
 */
export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tags?: string[];
  /** Dark grid (default) or light grid */
  dark?: boolean;
  /** "lg" (default, H1 scale) for short titles of 2–5 words; "md" (H2 scale) for long article / case study titles */
  size?: 'lg' | 'md';
  /** Mono "← label" link above the eyebrow, back to the parent listing */
  back?: { label: string; href: string; onClick?: (e: MouseEvent) => void };
  /** Right-hand column beside the title, e.g. <CaseFacts> */
  aside?: ReactNode;
  /** Rendered under the title row, e.g. a .bn-cols row of <Stat> */
  children?: ReactNode;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
