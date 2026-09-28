/**
 * Subpage banner on the technical grid (dark by default): eyebrow, Archivo H1, lead, mono tags. Left-aligned. A title ending in "." gets the blue period.
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
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
