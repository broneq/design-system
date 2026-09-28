/**
 * Compact dark header of a blog post or case study: back link (in the TOC column on desktop), eyebrow, Archivo title, excerpt, mono meta line.
 * An optional cover image overlaps the bottom edge of the dark block. A title ending in "." gets the blue period.
 */
export interface ArticleHeaderProps {
  /** Mono "← label" link back to the listing */
  back?: { label: string; href: string; onClick?: (e: MouseEvent) => void };
  eyebrow?: string;
  title: string;
  /** One or two sentences under the title */
  excerpt?: string;
  /** Short facts joined by middots: period, role, reading time */
  meta?: string[];
  /** Cover image URL, shown 21:9 (16:10 on mobile) */
  cover?: string;
  coverAlt?: string;
}
export declare function ArticleHeader(props: ArticleHeaderProps): JSX.Element;
