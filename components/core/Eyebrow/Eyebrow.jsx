import React from 'react';
export function Eyebrow({ children, prefix = '//', tone = 'muted', as = 'p', className }) {
  const Tag = as;
  return <Tag className={['bn-eyebrow', tone === 'accent' && 'bn-eyebrow--accent', className].filter(Boolean).join(' ')}>{prefix && <span className="pre">{prefix}</span>}<span>{children}</span></Tag>;
}
