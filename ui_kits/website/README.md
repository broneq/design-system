# broniszewski.net — Website UI kit (v2)

Click-through of the redesigned site. Positioning: architect helping dev teams bring AI into the SDLC. Copy is placeholder — content strategy is still open.

- **HomeScreen.jsx** — dark grid Hero with avatar → problems → 4-step process (each ServiceCard under its own Segments bar, AI step in signal orange) → 3 engagement formats → readable experience Timeline → case studies → blue FinalCTA
- **ServiceScreen.jsx** — PageHeader → problems (split) → 3 deliverables (ServiceCards on faded grid) → week-by-week Timeline → Stats → FinalCTA
- **CaseStudiesScreen.jsx** — PageHeader → CaseStudyCards in `.bn-cols--3` → Pagination
- **CaseStudyScreen.jsx** — PageHeader `size="md"` → 3 Stats → framed image → ArticleLayout (context, problem, quote, approach) → prev/next links → FinalCTA
- **ContactScreen.jsx** — PageHeader → split: numbered "what happens next" rows, direct contact, LiveBadge | ContactForm

Every screen uses sentence-case titles ending in a blue period, first person singular, and `.bn-cols` for columns. Light sections that need texture use `.section--subtle.bn-grid.bn-grid--fade`.

Header is dark + sticky; Footer is dark grid with the mega wordmark. All primitives from `window.BroniszewskiDesignSystem_db82bc`.
