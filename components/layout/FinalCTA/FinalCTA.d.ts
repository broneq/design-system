/**
 * Blue closing band with white grid lines: Archivo title (period in ink), intro, checklist; dark ink card with avatar, invitation and CTA.
 */
export interface FinalCTAProps {
  title?: string;
  intro?: string;
  eyebrow?: string;
  points?: string[];
  avatar?: string;
  invitation?: string;
  author?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: (e: any) => void;
  note?: string;
}
export declare function FinalCTA(props: FinalCTAProps): JSX.Element;
