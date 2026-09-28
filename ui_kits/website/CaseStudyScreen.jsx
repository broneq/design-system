function CaseStudyScreen({ go, slug }) {
  const { PageHeader, CaseFacts, TagList, Stat, CaseSection, ChallengeBlock, PullQuote, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
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
  const block = (b, k) =>
    b.lead ? <p key={k} className="lead">{b.lead}</p>
    : b.p ? <p key={k}>{b.p}</p>
    : b.h3 ? <h3 key={k}>{b.h3}</h3>
    : b.list ? <ul key={k}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
    : b.quote ? <blockquote key={k}><p>„{b.quote}”</p><footer>{b.by}</footer></blockquote>
    : b.challenge ? <ChallengeBlock key={k} label={b.challenge} title={b.title} problem={b.problem} solution={b.solution} result={b.result} />
    : null;
  // Chapters run in containers; a pull quote band splits them into groups.
  const groups = [[]];
  let n = 0;
  post.body.forEach((c) => { if (c.pullQuote) groups.push('quote', []); else groups[groups.length - 1].push({ ...c, index: ++n }); });
  return (<>
    <PageHeader size="md" back={{ label: 'Wszystkie case studies', href: '#/cases', onClick: (e) => { e.preventDefault(); go('cases'); } }}
      eyebrow={'Case study · ' + post.sector} title={post.title} subtitle={post.excerpt} aside={<CaseFacts items={facts} />}>
      <div className="bn-cols bn-cols--3">{post.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
    </PageHeader>
    <section className="section"><div className="container">
      <figure className="bn-case-cover"><img src={d.img + post.image} alt="" /></figure>
    </div></section>
    {groups.map((g, gi) => g === 'quote'
      ? <section key={gi} className="section section--subtle bn-grid bn-grid--fade"><div className="container"><PullQuote quote={post.quote} role={post.quoteAuthor} /></div></section>
      : <div key={gi} className="container">
          {g.map((c) => <CaseSection key={c.title} index={c.index} title={c.title}>{c.blocks.map(block)}</CaseSection>)}
          {gi === groups.length - 1 && <nav className="bn-post-nav" aria-label="Inne case studies">
            {prev && <a className="prev" href={'#/case/' + prev.slug} onClick={open(prev)}><span className="dir">← Poprzedni</span><span className="title">{prev.title}</span></a>}
            {next && <a className="next" href={'#/case/' + next.slug} onClick={open(next)}><span className="dir">Następny →</span><span className="title">{next.title}</span></a>}
          </nav>}
        </div>)}
    <FinalCTA title="Masz podobne wyzwanie?" intro="Opowiedz, jak dziś wygląda Wasz proces. Po 30 minutach będziesz wiedzieć, od czego zacząć." points={['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze']} avatar={d.img + 'profile.png'} onCta={(e) => { e.preventDefault(); go('contact'); }} />
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
