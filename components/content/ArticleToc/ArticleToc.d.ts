/**
 * Sticky table of contents for a long article: mono chapter numbers on a hairline rail, the chapter being read marked with the accent.
 * Rendered by ArticleLayout when it gets `toc`: the sticky rail beside the prose above 1024px, a collapsible list above the article at ≤1024px.
 */
export interface ArticleTocItem { id: string; label: string }
export interface ArticleTocProps {
  items: ArticleTocItem[];
  /** Heading above the list and the nav's accessible name */
  title?: string;
  /** A closed <details> list instead of the sticky rail; picking a chapter closes it */
  collapsible?: boolean;
}
export declare function ArticleToc(props: ArticleTocProps): JSX.Element;
