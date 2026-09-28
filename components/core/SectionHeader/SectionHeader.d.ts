/**
 * Eyebrow + Archivo 800 heading (fluid 40–76px) + optional grey second line and lead. A trailing "." in title renders in brand blue.
 */
export interface SectionHeaderProps {
  /** Mono label above, e.g. "Proces" */
  eyebrow?: string;
  /** Default "//"; use "01 —" for numbered sections */
  eyebrowPrefix?: string | null;
  title: string;
  /** Second line in muted grey */
  titleMuted?: string;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  align?: 'left' | 'center';
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
