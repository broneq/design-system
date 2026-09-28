function HomeScreen({ go }) {
  const { Hero, SectionHeader, ProblemListItem, TextSeparator, ServiceCard, Segments, Timeline, TimelineItem, CaseStudyCard, CooperationCard, FinalCTA, Button } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const [step, setStep] = React.useState(2);
  // Dimming inactive steps only makes sense where hover can re-highlight them
  const canHover = window.matchMedia('(hover: hover)').matches;
  const click = (fn) => (e) => { e.preventDefault(); fn(); };
  const steps = [
    { t: 'Diagnoza', d: 'Przechodzę z zespołem drogę od ticketu do produkcji i mierzę, gdzie praca naprawdę czeka.', p: ['Warsztat z zespołem', 'Mapa SDLC', 'Baseline metryk'] },
    { t: 'Architektura', d: 'Projektuję rolę AI w procesie: gdzie agent, gdzie asystent, gdzie człowiek.', p: ['Zasady i guardraile', 'Dobór narzędzi', 'Plan pilotażu'] },
    { t: 'Wdrożenie AI', d: 'Pilotaż na jednym zespole z cotygodniowym przeglądem efektów.', p: ['Coaching w pracy', 'Prompty i szablony', 'Przeglądy tygodniowe'] },
    { t: 'Utrwalenie', d: 'Playbook, metryki i ludzie, którzy rozwijają proces beze mnie.', p: ['Playbook', 'Szkolenie liderów', 'Plan skalowania'] },
  ];
  return (<>
    <Hero eyebrow="Architekt · AI w SDLC" title={['Szybszy', 'SDLC.']}
      subheading="Architektura, procesy i AI w jednym. Pomagam zespołom deweloperskim dowozić szybciej bez utraty jakości."
      primaryCta={{ label: 'Umów rozmowę', href: '#', onClick: click(() => go('contact')) }}
      secondaryCta={{ label: 'Case studies', href: '#', onClick: click(() => go('cases')) }}
      status="Wolne terminy od listopada" image={d.img + 'profile.png'} imageAlt="Przemysław Broniszewski" />
    <section className="section"><div className="container bn-cols bn-cols--split" style={{ '--cols-gap': '64px' }}>
      <SectionHeader eyebrow="Rozpoznajesz to?" title="AI jest. Efektu nie ma." />
      <div><ul>{['Każdy w zespole używa AI inaczej i nikt nie wie, co działa.', 'Kod powstaje szybciej, ale kolejka do review rośnie.', 'Licencje kosztują, a lead time się nie zmienił.', 'Nikt nie odpowiada za to, jak AI wpływa na jakość.'].map((p) => <ProblemListItem key={p} text={p} />)}</ul>
      <TextSeparator>Problemem nie jest narzędzie. Jest nim proces.</TextSeparator></div>
    </div></section>
    <section className="section bn-dark bn-grid"><div className="container">
      <SectionHeader eyebrow="Proces" eyebrowPrefix="01 —" title="Cztery kroki." titleMuted="Od pilota do nowego procesu." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 8, marginBottom: 28 }}>
        {steps.map((s, i) => <button key={s.t} onClick={() => setStep(i)} aria-pressed={i === step} style={{ background: 'none', border: 0, textAlign: 'left', cursor: 'pointer', padding: '12px 0', minWidth: 0 }}><Segments count={1} current={i === step ? 0 : -1} done={i < step ? 1 : 0} labels={[String(i + 1).padStart(2, '0') + ' · ' + s.t]} /></button>)}
      </div>
      <div className="bn-cols bn-cols--4" style={{ '--cols-gap': '16px' }}>
        {steps.map((s, i) => <div key={s.t} style={{ opacity: !canHover || i === step ? 1 : 0.55, transition: 'opacity .25s' }} onMouseEnter={() => setStep(i)}><ServiceCard number={i + 1} title={s.t} description={s.d} points={s.p} /></div>)}
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionHeader eyebrow="Współpraca" eyebrowPrefix="02 —" title="Trzy formaty." />
      <div className="bn-cols bn-cols--3" style={{ '--cols-gap': '16px' }}>
        <CooperationCard icon="fa-magnifying-glass-chart" title="Diagnoza SDLC" subtitle="2 tygodnie" ideal="Chcesz wiedzieć, gdzie AI da Twojemu zespołowi najwięcej, zanim wydasz budżet." scope="Warsztaty, Mapa procesu, Raport z rekomendacjami" />
        <CooperationCard icon="fa-rocket" title="Pilotaż AI w SDLC" subtitle="6–10 tygodni" ideal="Chcesz przejść od eksperymentów do procesu na jednym zespole." scope="Projekt roli AI, Coaching, Metryki przed / po, Playbook" />
        <CooperationCard icon="fa-people-group" title="Warsztaty dla zespołu" subtitle="1–2 dni" ideal="Chcesz, żeby zespół pracował z AI świadomie i według wspólnych zasad." scope="Code review z AI, Testy, Praca z agentami" />
      </div>
    </div></section>
    <section className="section" style={{ background: 'var(--bg-subtle)' }}><div className="container">
      <SectionHeader eyebrow="Doświadczenie" eyebrowPrefix="03 —" title="20 lat w software." titleMuted="Od kodu do architektury procesu." />
      <Timeline>
        <TimelineItem label="2024 — teraz" title="Architekt / konsultant AI w SDLC" meta="Niezależnie" description="Wdrożenia AI w procesie wytwarzania dla zespołów 10–80 osób." status="Teraz" current />
        <TimelineItem label="2016 — 2024" title="CTO / Head of Engineering" meta="TSL · e-commerce" description="Transformacja cyfrowa, platforma CI/CD, skalowanie zespołu z 6 do 40 osób." status="8 lat" />
        <TimelineItem label="2006 — 2016" title="Software Architect" meta="Software house" description="Architektura systemów integracyjnych, Kafka, Kubernetes." status="10 lat" />
      </Timeline>
    </div></section>
    <section className="section"><div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}><SectionHeader eyebrow="Case studies" eyebrowPrefix="04 —" title="Wyniki, nie slajdy." /><div style={{ marginBottom: 64 }}><Button variant="secondary" href="#" onClick={click(() => go('cases'))} arrow>Wszystkie</Button></div></div>
      <div className="bn-cols bn-cols--3">{d.cases.map((c) => <CaseStudyCard key={c.slug} title={c.title} excerpt={c.excerpt} image={d.img + c.image} tags={c.tags.slice(0, 2)} href="#" onClick={click(() => go('case', c.slug))} />)}</div>
    </div></section>
    <FinalCTA intro="Opowiedz, jak dziś wygląda Wasz proces. Wskażę 2–3 miejsca, gdzie AI da najwięcej." points={['Mapa Waszego SDLC w 30 minut', 'Szybkie zwycięstwa na najbliższy sprint', 'Czy pilotaż ma sens — szczerze']} avatar={d.img + 'profile.png'} onCta={click(() => go('contact'))} />
  </>);
}
window.HomeScreen = HomeScreen;
