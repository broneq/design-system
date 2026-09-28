import React from 'react';
const LEGACY = { outline: 'secondary', 'white-outline': 'inverse' };
export function Button({ variant = 'primary', size = 'md', arrow, as = 'a', href, type = 'button', target, rel, block, disabled, className, onClick, children, ...rest }) {
  const v = LEGACY[variant] || variant;
  const cls = ['bn-btn', 'bn-btn--' + v, size === 'sm' && 'bn-btn--sm', block && 'bn-btn--block', className].filter(Boolean).join(' ');
  const inner = <>{children}{arrow && <span className="arr" aria-hidden="true">{arrow === true ? '→' : arrow}</span>}</>;
  if (as === 'button') return <button type={type} className={cls} disabled={disabled} onClick={onClick} {...rest}>{inner}</button>;
  const relValue = target === '_blank' ? rel || 'noopener noreferrer' : rel;
  return <a href={href} className={cls} target={target} rel={relValue} onClick={onClick} {...rest}>{inner}</a>;
}
