/**
 * Subpage banner on the technical grid (dark by default): eyebrow, Archivo H1, lead, mono tags. Left-aligned.
 */
export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tags?: string[];
  /** Dark grid (default) or light grid */
  dark?: boolean;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
