function CaseStudyScreen({ go, slug }) {
  const { PageHeader, CaseFacts, TagList, Stat, CaseSection, PullQuote, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const i = Math.max(0, d.cases.findIndex((c) => c.slug === slug));
  const post = d.cases[i], prev = d.cases[i - 1], next = d.cases[i + 1];
  const open = (c) => (e) => { e.preventDefault(); go('case', c.slug); };
  const facts = [
    { label: 'Klient', value: post.client },
    { label: 'Okres', value: post.period },
    { label: 'Rola', value: post.role },
    { label: 'Stack', value: <TagList items={post.tags} /> },
  ];
  return (<>
    <PageHeader size="md" back={{ label: 'Wszystkie case studies', href: '#/cases', onClick: (e) => { e.preventDefault(); go('cases'); } }}
      eyebrow={'Case study · ' + post.sector} title={post.title} subtitle={post.excerpt} aside={<CaseFacts items={facts} />}>
      <div className="bn-cols bn-cols--3">{post.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
    </PageHeader>
    <section className="section"><div className="container">
      <figure className="bn-case-cover"><img src={d.img + post.image} alt="" /></figure>
    </div></section>
    <div className="container">
      <CaseSection index={1} title="Kontekst"><p>{post.context}</p></CaseSection>
      <CaseSection index={2} title="Problem"><p>{post.problem}</p></CaseSection>
    </div>
    <section className="section section--subtle bn-grid bn-grid--fade"><div className="container">
      <PullQuote quote={post.quote} role={post.quoteAuthor} />
    </div></section>
    <div className="container">
      <CaseSection index={3} title="Co zrobiłem"><ul>{post.approach.map((a) => <li key={a}>{a}</li>)}</ul></CaseSection>
      <CaseSection index={4} title="Efekt">{post.outcome.map((p, n) => <p key={p} className={n === 0 ? 'lead' : undefined}>{p}</p>)}</CaseSection>
      <nav className="bn-post-nav" aria-label="Inne case studies">
        {prev && <a className="prev" href={'#/case/' + prev.slug} onClick={open(prev)}><span className="dir">← Poprzedni</span><span className="title">{prev.title}</span></a>}
        {next && <a className="next" href={'#/case/' + next.slug} onClick={open(next)}><span className="dir">Następny →</span><span className="title">{next.title}</span></a>}
      </nav>
    </div>
    <FinalCTA title="Masz podobny problem?" intro="Opowiedz, jak dziś wygląda Wasz proces. Po 30 minutach będziesz wiedzieć, od czego zacząć." points={['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze']} avatar={d.img + 'profile.png'} onCta={(e) => { e.preventDefault(); go('contact'); }} />
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
