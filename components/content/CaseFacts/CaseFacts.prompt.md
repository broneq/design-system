Project facts for the case study header - pass it as `aside` to `PageHeader`. Keep it to 3-5 rows of short values; the sector already sits in the eyebrow.

```jsx
<CaseFacts items={[
  { label: 'Klient', value: 'Firma transportowa, 400 osób' },
  { label: 'Okres', value: '2016-2024' },
  { label: 'Rola', value: 'CTO, architekt systemu' },
  { label: 'Stack', value: <TagList items={['TMS', 'Automatyzacja']} /> },
]} />
```
