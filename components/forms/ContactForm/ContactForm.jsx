import React from 'react';
import { Button } from '../../core/Button/Button.jsx';
const REQUIRED = ['name', 'company', 'email', 'team', 'description'];
export function ContactForm({ onSubmit, submitLabel = 'Wyślij zapytanie' }) {
  const [v, setV] = React.useState({ name: '', company: '', email: '', phone: '', team: '', description: '' });
  const [invalid, setInvalid] = React.useState({});
  const [alert, setAlert] = React.useState(null);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    REQUIRED.forEach((f) => { if (!v[f].trim()) errs[f] = 'To pole jest wymagane'; });
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = 'Nieprawidłowy adres email';
    setInvalid(errs);
    if (Object.keys(errs).length) {
      const only = errs.email === 'Nieprawidłowy adres email' && Object.keys(errs).length === 1;
      setAlert({ type: 'error', msg: only ? errs.email : 'Uzupełnij wymagane pola.' });
      return;
    }
    setAlert({ type: 'success', msg: 'Dzięki. Odezwę się w ciągu 1 dnia roboczego.' });
    onSubmit && onSubmit(v);
    setV({ name: '', company: '', email: '', phone: '', team: '', description: '' });
  };
  const cls = (k) => 'bn-input' + (invalid[k] ? ' is-invalid' : '');
  const Req = () => <span className="req">*</span>;
  return (
    <div>
      <div className={'bn-alert' + (alert ? ' visible ' + alert.type : '')} role="alert" aria-live="polite">{alert && alert.msg}</div>
      <form className="bn-form" noValidate onSubmit={submit}>
        <div className="grid">
          <div className="group"><label htmlFor="cf-name">Imię i nazwisko <Req /></label><input id="cf-name" className={cls('name')} value={v.name} onChange={set('name')} /></div>
          <div className="group"><label htmlFor="cf-company">Nazwa firmy <Req /></label><input id="cf-company" className={cls('company')} value={v.company} onChange={set('company')} /></div>
          <div className="group"><label htmlFor="cf-email">Email <Req /></label><input id="cf-email" type="email" className={cls('email')} value={v.email} onChange={set('email')} /></div>
          <div className="group"><label htmlFor="cf-phone">Telefon</label><input id="cf-phone" type="tel" className="bn-input" value={v.phone} onChange={set('phone')} /></div>
          <div className="group full"><label htmlFor="cf-team">Wielkość zespołu IT <Req /></label>
            <select id="cf-team" className={cls('team')} value={v.team} onChange={set('team')}><option value="">Wybierz...</option><option value="1-5">1-5</option><option value="6-15">6-15</option><option value="16+">16+</option></select></div>
        </div>
        <div className="group full"><label htmlFor="cf-desc">Opis wyzwania <Req /></label><textarea id="cf-desc" rows={8} className={cls('description')} value={v.description} onChange={set('description')}></textarea></div>
        <div className="actions"><Button as="button" type="submit" arrow>{submitLabel}</Button></div>
      </form>
    </div>
  );
}
