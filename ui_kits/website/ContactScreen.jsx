function ContactScreen() {
  const { PageHeader, SectionHeader, ProblemListItem, ContactForm, LiveBadge, Eyebrow } = window.BroniszewskiDesignSystem_db82bc;
  const next = ['Odpisuję w ciągu jednego dnia roboczego z propozycją terminu.', 'Rozmawiamy 30 minut o Waszym procesie i celach.', 'Dostajesz notatkę z 2–3 miejscami, gdzie AI da najwięcej.'];
  return (<>
    <PageHeader eyebrow="Kontakt" title="Porozmawiajmy." subtitle="30 minut o tym, jak dziś wygląda Wasz proces. Bez prezentacji sprzedażowej." />
    <section className="section"><div className="container bn-cols bn-cols--split bn-cols--mobile-reverse">
      <div>
        <SectionHeader eyebrow="Co dalej" title="Trzy kroki." />
        <ul>{next.map((t, i) => <ProblemListItem key={t} marker={String(i + 1).padStart(2, '0')} text={t} />)}</ul>
        <div className="bn-contact-direct">
          <Eyebrow>Bezpośrednio</Eyebrow>
          <a href="mailto:kontakt@broniszewski.net">kontakt@broniszewski.net</a>
          <a href="https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <LiveBadge>Wolne terminy od listopada</LiveBadge>
        </div>
      </div>
      <div>
        <SectionHeader eyebrow="Formularz" title="Opisz wyzwanie." />
        <ContactForm privacyHref="#" />
      </div>
    </div></section>
  </>);
}
window.ContactScreen = ContactScreen;
