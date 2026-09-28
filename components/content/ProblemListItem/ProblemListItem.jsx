import React from 'react';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function ProblemListItem({ text, marker = '→' }) {
  return <li className="bn-problem-item"><span className="mk" aria-hidden="true">{marker}</span><span className="txt">{text}</span></li>;
}
export function TextSeparator({ children }) {
  return <p className="bn-text-separator">{withDot(children)}</p>;
}
