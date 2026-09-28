import type { ReactNode } from 'react';
import type { ArticleTocItem } from '../ArticleToc/ArticleToc';
/**
 * 720px prose column: 18px/1.75 Geist, Archivo headings, quiet accent-rule quotes, mono code, dark pre blocks.
 * With `toc` it becomes the article page grid: sticky ArticleToc on the left, a collapsible one above the prose at ≤1024px; prose centred in the container.
 */
export interface ArticleLayoutProps {
  /** Chapters for the sticky table of contents; each id must match an h2 id in the prose */
  toc?: ArticleTocItem[];
  tocTitle?: string;
  children?: ReactNode;
}
export declare function ArticleLayout(props: ArticleLayoutProps): JSX.Element;
