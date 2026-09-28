/**
 * Lead form: name, company, email, phone, team size, challenge. Mono labels, 52px inputs (3:1 border) with solid blue focus outline, blue required marks.
 * Validation runs on submit, then live on every change. Each invalid field gets aria-invalid, a red border and its message
 * right below (linked via aria-describedby); focus moves to the first invalid field and a polite live region announces the count.
 * On success the form is replaced in place by a focused confirmation with a link that resets the form.
 */
export interface ContactFormProps {
  onSubmit?: (values: { name: string; company: string; email: string; phone: string; team: string; description: string }) => void;
  submitLabel?: string;
  /** Adds a "Polityka prywatności" link to the privacy note under the submit button. */
  privacyHref?: string;
}
export declare function ContactForm(props: ContactFormProps): JSX.Element;
