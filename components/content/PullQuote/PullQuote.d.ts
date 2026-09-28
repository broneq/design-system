/**
 * Large client quote: Archivo 800 at fluid 28-52px, balanced, Polish quotation marks added by the component; mono caption with an accent "//". Place it in its own full-width band.
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
