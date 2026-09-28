/**
 * Lead form: name, company, email, phone, team size, challenge. Mono labels, 52px hairline inputs with blue focus ring, orange required marks.
 */
export interface ContactFormProps {
  onSubmit?: (values: { name: string; company: string; email: string; phone: string; team: string; description: string }) => void;
  submitLabel?: string;
}
export declare function ContactForm(props: ContactFormProps): JSX.Element;
