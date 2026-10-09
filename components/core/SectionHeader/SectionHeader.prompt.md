Opens every content section: `//` eyebrow, Archivo 800 title ending in a blue period, optional grey second line (`titleMuted`) for the "so what", optional lead (`subtitle`). Left-aligned by default.

```jsx
<SectionHeader eyebrow="Proces" title="Cztery kroki." titleMuted="Od diagnozy do procesu, który działa beze mnie." />
<SectionHeader eyebrow="Co dostajesz" title="Trzy rezultaty." subtitle="Zostają w zespole po moim wyjściu." />
<SectionHeader eyebrow="Proces" eyebrowPrefix="01 /" title="Cztery kroki." />
```

- Sentence case, 2-5 words per line, never Title Case.
- `eyebrowPrefix` replaces "//" in numbered sections.
- With an action beside it, wrap the header and the action in `.bn-section-row`.
- `align="center"` only for a standalone centred block; page sections stay left-aligned.
