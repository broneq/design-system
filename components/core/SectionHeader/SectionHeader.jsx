import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow.jsx';
const withDot = (t) => (typeof t === 'string' && t.endsWith('.')) ? <>{t.slice(0, -1)}<span className="bn-dot">.</span></> : t;
export function SectionHeader({ eyebrow, eyebrowPrefix = '//', title, titleMuted, subtitle, as = 'h2', align = 'left' }) {
  const Tag = as;
  return (
    <header className={'bn-section-header ' + align}>
      {eyebrow && <Eyebrow prefix={eyebrowPrefix}>{eyebrow}</Eyebrow>}
      <Tag className="title">{withDot(title)}{titleMuted && <span className="muted">{titleMuted}</span>}</Tag>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}
