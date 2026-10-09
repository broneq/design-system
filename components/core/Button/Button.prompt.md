The only button - use it for every CTA. Labels are verb-first, 1-3 words, written in sentence case (CSS sets the uppercase).

```jsx
<Button href="/kontakt" arrow>Umów rozmowę</Button>
<Button variant="secondary" href="/case-studies">Case studies</Button>
<Button as="button" type="submit">Wyślij</Button>
```

- `variant`: `primary` (blue fill, the main action), `secondary` (hairline outline), `inverse` (white fill on the blue band or a photo), `link` (text only). `outline` / `white-outline` are legacy aliases of `secondary` / `inverse` - don't use them in new code.
- One `primary` per view; pair it with a `secondary` for the second action.
- `arrow` adds "→" (or pass a glyph such as "↗"); `size="sm"` for headers and dense rows; `as="button"` in forms; `block` for full width (e.g. the FinalCTA card).
