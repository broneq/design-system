# broniszewski.net - Website UI kit (v2)

Click-through of the redesigned site. Positioning: architect helping dev teams bring AI into the SDLC. Copy is placeholder - content strategy is still open.

- **HomeScreen.jsx** - dark grid Hero with avatar → problems → 4-step process (each ServiceCard under its own Segments bar, AI step in signal orange) → 3 engagement formats (CooperationCards as a ladder, pilot `featured`, each with a link) → readable experience Timeline → case studies → blue FinalCTA
- **ServiceScreen.jsx** - PageHeader with a "Umów rozmowę" action → problems (split) → 3 deliverables (`plain` ServiceCards, `.bn-cols--fixed`) → week-by-week Timeline (no status chips, `current` on the coaching phase) → Stats + `.bn-footnote` → "Dla kogo" fit / misfit lists → Faq (split) → FinalCTA. Sections are unnumbered.
- **CaseStudiesScreen.jsx** - PageHeader → newest post as a `featured` CaseStudyCard → the rest in `.bn-cols--3` (meta: sector + reading time) → Pagination
- **CaseStudyScreen.jsx** - blog post layout: ArticleHeader (back link, title, excerpt, meta, cover overlapping the dark block) → ArticleLayout with a sticky table of contents; chapters from `data.js` become numbered h2s, with PullQuote, ChallengeBlock and a Stat row as blocks → tags → prev/next links → FinalCTA
- **ContactScreen.jsx** - PageHeader → `.bn-cols--split.bn-cols--mobile-reverse`: "Co dalej" steps + `.bn-contact-direct` (email, LinkedIn, LiveBadge) | "Formularz" SectionHeader + ContactForm (form first on mobile)

Every screen uses sentence-case titles ending in a blue period, first person singular, and `.bn-cols` for columns. Light sections that need texture use `.section--subtle.bn-grid.bn-grid--fade`.

Header is dark + sticky; Footer is dark grid with the mega wordmark. All primitives from `window.BroniszewskiDesignSystem_db82bc`.
