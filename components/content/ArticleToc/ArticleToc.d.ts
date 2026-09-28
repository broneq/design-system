/**
 * Sticky table of contents for a long article: mono chapter numbers on a hairline rail, the chapter being read marked with the accent.
 * Rendered by ArticleLayout when it gets `toc`; hidden at ≤1024px.
 */
export interface ArticleTocItem { id: string; label: string }
export interface ArticleTocProps {
  items: ArticleTocItem[];
  /** Heading above the list and the nav's accessible name */
  title?: string;
}
export declare function ArticleToc(props: ArticleTocProps): JSX.Element;
