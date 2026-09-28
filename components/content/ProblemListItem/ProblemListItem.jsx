import React from 'react';
export function ProblemListItem({ text, marker = '→' }) {
  return <li className="bn-problem-item"><span className="mk" aria-hidden="true">{marker}</span><span>{text}</span></li>;
}
export function TextSeparator({ children }) {
  return <div className="bn-text-separator"><p>{children}</p></div>;
}
