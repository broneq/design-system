function ServiceScreen({ go }) {
  const { PageHeader, SectionHeader, ProblemListItem, TextSeparator, ServiceCard, Timeline, TimelineItem, Stat, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const toContact = (e) => { e.preventDefault(); go('contact'); };
  return (<>
    <PageHeader eyebrow="Usługa" title="Pilotaż AI w SDLC." subtitle="6–10 tygodni na jednym zespole. Od eksperymentów z narzędziami do wspólnego procesu z mierzalnym efektem." tags={['6–10 tygodni', '1 zespół', 'Metryki przed / po']} />
    <section className="section"><div className="container bn-cols bn-cols--split" style={{ '--cols-gap': '64px' }}>
      <SectionHeader eyebrow="Punkt wyjścia" title="Narzędzia są. Procesu nie ma." />
      <div><ul>{['Każdy programista używa AI po swojemu.', 'Pull requesty rosną szybciej niż przepustowość review.', 'Nikt nie wie, czy AI skraca lead time, czy tylko przesuwa pracę.', 'Zasady bezpieczeństwa kończą się na „nie wklejaj kodu klienta”.'].map((p) => <ProblemListItem key={p} text={p} />)}</ul>
      <TextSeparator>Pilotaż zamienia eksperymenty w proces.</TextSeparator></div>
    </div></section>
    <section className="section section--subtle bn-grid bn-grid--fade"><div className="container">
      <SectionHeader eyebrowPrefix="01 —" eyebrow="Co dostajesz" title="Trzy rezultaty." titleMuted="Zostają w zespole po moim wyjściu." />
      <div className="bn-cols bn-cols--3" style={{ '--cols-gap': '16px' }}>
        <ServiceCard number={1} icon="fa-map" title="Mapa procesu" description="Droga od ticketu do produkcji z zaznaczonymi miejscami, gdzie praca czeka." points={['Warsztat z zespołem', 'Baseline metryk', 'Priorytety zmian']} />
        <ServiceCard number={2} icon="fa-book" title="Playbook zespołu" description="Wspólne zasady pracy z AI: kiedy agent, kiedy asystent, kiedy człowiek." points={['Guardraile i bezpieczeństwo', 'Prompty i szablony', 'Definicja review']} />
        <ServiceCard number={3} icon="fa-chart-line" title="Metryki przed / po" description="Dowód, co się zmieniło, zanim skalujesz na kolejne zespoły." points={['Lead time', 'Czas review', 'Jakość wydań']} />
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionHeader eyebrowPrefix="02 —" eyebrow="Przebieg" title="Tydzień po tygodniu." />
      <Timeline>
        <TimelineItem label="Tydzień 1–2" title="Diagnoza" meta="Warsztat · pomiary" description="Przechodzę z zespołem całą drogę zmiany i mierzę, gdzie praca stoi." status="2 tyg." />
        <TimelineItem label="Tydzień 3" title="Architektura" meta="Zasady · narzędzia" description="Projektuję rolę AI w procesie i ustalam, co mierzymy." status="1 tydz." />
        <TimelineItem label="Tydzień 4–8" title="Wdrożenie AI" meta="Coaching w pracy" description="Zespół pracuje nowym procesem, a ja co tydzień przeglądam efekty." status="Pilotaż" current />
        <TimelineItem label="Tydzień 9–10" title="Utrwalenie" meta="Playbook · liderzy" description="Przekazuję proces liderom, żeby działał beze mnie." status="2 tyg." />
      </Timeline>
    </div></section>
    <section className="section section--subtle bn-grid bn-grid--fade"><div className="container">
      <SectionHeader eyebrowPrefix="03 —" eyebrow="Efekt" title="Co mierzę." titleMuted="Przykład z pilotażu w zespole 12 osób." />
      <div className="bn-cols bn-cols--3">
        <Stat value="−35%" label="Lead time" note="Od ticketu do produkcji" />
        <Stat value="−50%" label="Czas review" note="Mediana dla pull requestów" />
        <Stat value="0" label="Regresji z kodu AI" note="W ciągu 8 tygodni" />
      </div>
    </div></section>
    <FinalCTA title="Sprawdźmy, czy pilotaż ma sens." intro="W 30 minut ocenimy, czy Twój zespół jest gotowy i od czego zacząć." points={['Stan obecnego procesu', 'Zespół, od którego warto zacząć', 'Realny zakres i czas']} avatar={d.img + 'profile.png'} onCta={toContact} />
  </>);
}
window.ServiceScreen = ServiceScreen;
