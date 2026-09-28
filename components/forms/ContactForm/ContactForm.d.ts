/**
 * Lead form: name, company, email, phone, team size, challenge. Mono labels, 52px inputs (3:1 border) with solid blue focus outline, blue required marks.
 */
export interface ContactFormProps {
  onSubmit?: (values: { name: string; company: string; email: string; phone: string; team: string; description: string }) => void;
  submitLabel?: string;
}
export declare function ContactForm(props: ContactFormProps): JSX.Element;
