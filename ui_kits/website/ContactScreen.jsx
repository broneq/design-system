function ContactScreen() {
  const { PageHeader, SectionHeader, ProblemListItem, ContactForm, LiveBadge, Eyebrow } = window.BroniszewskiDesignSystem_db82bc;
  const next = ['Odpisuję w ciągu 24 godzin z propozycją terminu.', 'Rozmawiamy 30 minut o Waszym procesie i celach.', 'Dostajesz notatkę z 2–3 miejscami, gdzie AI da najwięcej.'];
  return (<>
    <PageHeader eyebrow="Kontakt" title="Porozmawiajmy." subtitle="30 minut o tym, jak dziś wygląda Wasz proces. Bez prezentacji sprzedażowej." />
    <section className="section"><div className="container bn-cols bn-cols--split" style={{ '--cols-gap': '64px' }}>
      <div>
        <SectionHeader eyebrow="Co dalej" title="Trzy kroki." />
        <ul>{next.map((t, i) => <ProblemListItem key={t} marker={String(i + 1).padStart(2, '0')} text={t} />)}</ul>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
          <Eyebrow>Bezpośrednio</Eyebrow>
          <a href="mailto:kontakt@broniszewski.net" style={{ display: 'inline-block', paddingBlock: 6, fontSize: 20, fontWeight: 500 }}>kontakt@broniszewski.net</a>
          <a href="https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', paddingBlock: 6, fontSize: 20, fontWeight: 500 }}>LinkedIn ↗</a>
          <div style={{ marginTop: 16 }}><LiveBadge>Wolne terminy od listopada</LiveBadge></div>
        </div>
      </div>
      <div><ContactForm /></div>
    </div></section>
  </>);
}
window.ContactScreen = ContactScreen;
