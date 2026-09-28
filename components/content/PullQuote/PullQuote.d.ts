/**
 * The one big quote of an article: Archivo 800 at fluid 28-40px under a strong rule, balanced, Polish quotation marks added by the component; mono caption with an accent "//". Place it inside ArticleLayout.
 */
export interface PullQuoteProps {
  /** The quote without quotation marks */
  quote: string;
  /** Person's name, if it may be published */
  author?: string;
  /** Role and company, e.g. "Dyrektor operacyjny" */
  role?: string;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
