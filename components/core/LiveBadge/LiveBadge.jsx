import React from 'react';
export function LiveBadge({ children, className }) {
  return <span className={['bn-live', className].filter(Boolean).join(' ')}><i aria-hidden="true"></i>{children}</span>;
}
