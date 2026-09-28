function ServiceScreen({ go }) {
  const { PageHeader, SectionHeader, ProblemListItem, TextSeparator, ServiceCard, Timeline, TimelineItem, Stat, Faq, Eyebrow, Button, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const toContact = (e) => { e.preventDefault(); go('contact'); };
  const fits = ['Zespół 10–80 osób już używa narzędzi AI, ale każdy po swojemu.', 'Macie CI/CD i zgodę na zebranie podstawowych metryk.', 'Lider zespołu znajdzie 2–3 godziny tygodniowo na pilotaż.'];
  const misfits = ['Szukacie jednorazowego szkolenia z promptowania.', 'Firma nie dopuszcza jeszcze AI do pracy z kodem.', 'Zespół jest w trakcie dużej reorganizacji.'];
  const faq = [
    { q: 'Ile kosztuje pilotaż?', a: 'Stała cena za cały pilotaż, ustalana po pierwszej rozmowie. Zależy od wielkości zespołu i czasu trwania, nie od liczby godzin.' },
    { q: 'Ile czasu zabiera to zespołowi?', a: 'Pół dnia warsztatu na start, potem około godziny tygodniowo na przegląd efektów. Reszta dzieje się w codziennej pracy.' },
    { q: 'Jakich narzędzi używamy?', a: 'Tych, które już macie albo na które firma się zgodzi. Pilotaż dotyczy procesu, nie konkretnego dostawcy.' },
    { q: 'Co z bezpieczeństwem kodu?', a: 'Zasady ustalamy w pierwszym tygodniu: jakie dane mogą trafić do modeli, gdzie potrzebny jest self-hosting i co zawsze wymaga review człowieka.' },
    { q: 'Co po pilotażu?', a: 'Zespół zostaje z playbookiem i metrykami. Jeśli wyniki są dobre, pomagam przenieść proces na kolejne zespoły.' },
  ];
  return (<>
    <PageHeader eyebrow="Usługa" title="Pilotaż AI w SDLC." subtitle="6–10 tygodni na jednym zespole. Od eksperymentów z narzędziami do wspólnego procesu z mierzalnym efektem."
      actions={<Button href="#/contact" onClick={toContact} arrow>Umów rozmowę</Button>} />
    <section className="section"><div className="container bn-cols bn-cols--split">
      <SectionHeader eyebrow="Punkt wyjścia" title="Narzędzia są." titleMuted="Procesu nie ma." />
      <div><ul>{['Każdy programista używa AI po swojemu.', 'Pull requesty rosną szybciej niż przepustowość review.', 'Nikt nie wie, czy AI skraca lead time, czy tylko przesuwa pracę.', 'Zasady bezpieczeństwa kończą się na „nie wklejaj kodu klienta”.'].map((p) => <ProblemListItem key={p} text={p} />)}</ul>
      <TextSeparator>Pilotaż zamienia eksperymenty w proces.</TextSeparator></div>
    </div></section>
    <section className="section section--subtle bn-grid bn-grid--fade"><div className="container">
      <SectionHeader eyebrow="Co dostajesz" title="Trzy rezultaty." subtitle="Zostają w zespole po moim wyjściu." />
      <div className="bn-cols bn-cols--3 bn-cols--fixed">
        <ServiceCard plain number={1} title="Mapa procesu" description="Droga od ticketu do produkcji z zaznaczonymi miejscami, gdzie praca czeka." points={['Warsztat z zespołem', 'Baseline metryk', 'Priorytety zmian']} />
        <ServiceCard plain number={2} title="Playbook zespołu" description="Wspólne zasady pracy z AI: kiedy agent, kiedy asystent, kiedy człowiek." points={['Guardraile i bezpieczeństwo', 'Prompty i szablony', 'Definicja review']} />
        <ServiceCard plain number={3} title="Metryki przed / po" description="Dowód, co się zmieniło, zanim przeniesiecie proces na kolejne zespoły." points={['Lead time', 'Czas review', 'Jakość wydań']} />
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionHeader eyebrow="Przebieg" title="Tydzień po tygodniu." />
      <Timeline>
        <TimelineItem label="Tydzień 1–2" title="Diagnoza" meta="Warsztat · pomiary" description="Przechodzę z zespołem całą drogę zmiany i mierzę, gdzie praca stoi." />
        <TimelineItem label="Tydzień 3" title="Architektura" meta="Zasady · narzędzia" description="Projektuję rolę AI w procesie i ustalam, co mierzymy." />
        <TimelineItem label="Tydzień 4–8" title="Wdrożenie AI" meta="Coaching w pracy" description="Zespół pracuje nowym procesem, a ja co tydzień przeglądam efekty." current />
        <TimelineItem label="Tydzień 9–10" title="Utrwalenie" meta="Playbook · liderzy" description="Przekazuję proces liderom, żeby działał beze mnie." />
      </Timeline>
    </div></section>
    <section className="section section--subtle bn-grid bn-grid--fade"><div className="container">
      <SectionHeader eyebrow="Efekt" title="Co mierzę." />
      <div className="bn-cols bn-cols--3 bn-cols--fixed">
        <Stat value="−35%" label="Lead time" note="Od ticketu do produkcji" />
        <Stat value="−50%" label="Czas review" note="Mediana dla pull requestów" />
        <Stat value="0" label="Regresji z kodu AI" note="W ciągu 8 tygodni" />
      </div>
      <p className="bn-footnote">Przykład z pilotażu w zespole 12 osób.</p>
    </div></section>
    <section className="section"><div className="container">
      <SectionHeader eyebrow="Dla kogo" title="Kiedy warto zacząć." />
      <div className="bn-cols bn-cols--2">
        <div><Eyebrow>Ma sens, gdy</Eyebrow><ul className="bn-fit-list">{fits.map((t) => <ProblemListItem key={t} marker="+" text={t} />)}</ul></div>
        <div><Eyebrow>Nie ma sensu, gdy</Eyebrow><ul className="bn-fit-list">{misfits.map((t) => <ProblemListItem key={t} marker="−" text={t} />)}</ul></div>
      </div>
    </div></section>
    <section className="section section--subtle"><div className="container bn-cols bn-cols--split">
      <SectionHeader eyebrow="FAQ" title="Zanim zapytasz." />
      <Faq items={faq} />
    </div></section>
    <FinalCTA title="Sprawdźmy, czy pilotaż ma sens." intro="W 30 minut ocenimy, czy Wasz zespół jest gotowy i od czego zacząć." points={['Stan obecnego procesu', 'Zespół, od którego warto zacząć', 'Realny zakres i czas']} avatar={d.img + 'profile.png'} onCta={toContact} />
  </>);
}
window.ServiceScreen = ServiceScreen;
