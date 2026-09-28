import React from 'react';
export function ChallengeBlock({ label = 'Wyzwanie', title, problem, solution, result }) {
  const rows = [['Problem', problem], ['Rozwiązanie', solution], ['Rezultat', result]].filter(([, v]) => v);
  return (
    <div className="bn-challenge">
      <p className="label">{label}</p>
      {title && <h3 className="title">{title}</h3>}
      <dl>{rows.map(([k, v]) => <div key={k} className={'row' + (k === 'Rezultat' ? ' result' : '')}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
    </div>
  );
}
