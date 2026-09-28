import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
const FIELDS = [
  { id: 'name', label: 'Imię i nazwisko', required: true, autoComplete: 'name' },
  { id: 'company', label: 'Nazwa firmy', required: true, autoComplete: 'organization' },
  { id: 'email', label: 'Email', required: true, type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'Telefon', type: 'tel', autoComplete: 'tel' },
  { id: 'team', label: 'Wielkość zespołu IT', required: true, full: true, options: ['do 10 osób', '10–30 osób', '30–80 osób', 'ponad 80 osób'] },
  { id: 'description', label: 'Opis wyzwania', required: true, full: true, multiline: true },
];
const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.id, '']));
function validate(v) {
  const errs = {};
  FIELDS.forEach((f) => { if (f.required && !v[f.id].trim()) errs[f.id] = 'To pole jest wymagane.'; });
  if (!errs.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errs.email = 'Wpisz adres w formacie nazwa@firma.pl.';
  return errs;
}
export function ContactForm({ onSubmit, submitLabel = 'Wyślij zapytanie', privacyHref }) {
  const [v, setV] = React.useState(EMPTY);
  const [errs, setErrs] = React.useState({});
  const [tried, setTried] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const form = React.useRef(null);
  const done = React.useRef(null);
  // After the first submit, errors follow the input so a fixed field clears at once.
  const set = (k) => (e) => { const next = { ...v, [k]: e.target.value }; setV(next); if (tried) setErrs(validate(next)); };
  const submit = (e) => {
    e.preventDefault();
    const found = validate(v);
    setTried(true);
    setErrs(found);
    const first = FIELDS.find((f) => found[f.id]);
    if (first) {
      const el = form.current.querySelector('#cf-' + first.id);
      el.focus({ preventScroll: true });
      el.scrollIntoView({ block: 'center' });
      return;
    }
    onSubmit && onSubmit(v);
    setSent(true);
  };
  React.useEffect(() => { if (sent && done.current) { done.current.focus({ preventScroll: true }); done.current.scrollIntoView({ block: 'center' }); } }, [sent]);
  if (sent) {
    return (
      <div className="bn-form-done" ref={done} tabIndex={-1} role="status">
        <p className="title">Dzięki, wiadomość dotarła.</p>
        <p className="text">Odezwę się w ciągu jednego dnia roboczego z propozycją terminu rozmowy.</p>
        <Button as="button" type="button" variant="link" onClick={() => { setV(EMPTY); setErrs({}); setTried(false); setSent(false); }}>Wyślij kolejne zapytanie</Button>
      </div>
    );
  }
  const count = Object.keys(errs).length;
  const field = (f) => {
    const id = 'cf-' + f.id, err = errs[f.id];
    const common = { id, className: 'bn-input' + (err ? ' is-invalid' : ''), value: v[f.id], onChange: set(f.id), required: f.required, 'aria-invalid': err ? 'true' : undefined, 'aria-describedby': err ? id + '-err' : undefined };
    return (
      <div key={f.id} className={'group' + (f.full ? ' full' : '')}>
        <label htmlFor={id}>{f.label}{f.required && <span className="req" aria-hidden="true"> *</span>}</label>
        {f.options ? <select {...common}><option value="">Wybierz…</option>{f.options.map((o) => <option key={o} value={o}>{o}</option>)}</select>
          : f.multiline ? <textarea {...common} rows={8} />
          : <input {...common} type={f.type || 'text'} autoComplete={f.autoComplete} />}
        {err && <p className="error" id={id + '-err'}>{err}</p>}
      </div>
    );
  };
  return (
    <form className="bn-form" noValidate onSubmit={submit} ref={form}>
      <p className="bn-sr-only" role="status" aria-live="polite">{count ? (count === 1 ? 'Popraw jedno pole.' : 'Popraw ' + count + (count < 5 ? ' pola.' : ' pól.')) : ''}</p>
      <div className="grid">{FIELDS.filter((f) => !f.multiline).map(field)}</div>
      {FIELDS.filter((f) => f.multiline).map(field)}
      <div className="actions">
        <Button as="button" type="submit" arrow>{submitLabel}</Button>
        <p className="note">Dane z formularza wykorzystam tylko do odpowiedzi na zapytanie.{privacyHref && <> <a href={privacyHref}>Polityka prywatności</a></>}</p>
      </div>
    </form>
  );
}
