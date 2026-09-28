The consultation-request form from /kontakt. Put a SectionHeader above it; the form itself has no heading.

```jsx
<ContactForm privacyHref="/polityka-prywatnosci" onSubmit={(v) => console.log(v)} />
```

- Errors sit under each field (`--danger-text`): "To pole jest wymagane." / "Wpisz adres w formacie nazwa@firma.pl." Focus jumps to the first invalid field; a screen-reader-only status says how many fields need fixing.
- Success replaces the form in place: "Dzięki, wiadomość dotarła." plus a "Wyślij kolejne zapytanie" link. No banners, no toasts.
- The privacy note under the button is always shown; `privacyHref` adds the policy link.
