/**
 * Question list on native <details>: 2px line-strong top rule, hairline between items, Archivo 700 question with a plus that turns into a cross when open. Closed by default; several can be open.
 */
export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqProps {
  items: FaqItem[];
}
export declare function Faq(props: FaqProps): JSX.Element;
