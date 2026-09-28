import React from 'react';
export function Stat({ value, label, note }) {
  return (
    <div className="bn-stat">
      <p className="value">{value}</p>
      <p className="label">{label}</p>
      {note && <p className="note">{note}</p>}
    </div>
  );
}
