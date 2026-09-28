/**
 * Subtle-grey block card (40px pad) for an engagement format: icon box, Archivo title, blue duration tag, description, scope checklist.
 */
export interface CooperationCardProps {
  icon?: string;
  title: string;
  /** Accent tag under title, e.g. "6–10 tygodni" */
  subtitle?: string;
  ideal?: string;
  /** Comma-separated scope items */
  scope?: string;
  examples?: string;
  scopeHeading?: string;
}
export declare function CooperationCard(props: CooperationCardProps): JSX.Element;
