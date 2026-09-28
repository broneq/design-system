function CaseStudyScreen({ go, slug }) {
  const { PageHeader, Stat, ArticleLayout, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const i = Math.max(0, d.cases.findIndex((c) => c.slug === slug));
  const post = d.cases[i], prev = d.cases[i - 1], next = d.cases[i + 1];
  const open = (c) => (e) => { e.preventDefault(); go('case', c.slug); };
  return (<>
    <PageHeader size={post.title.split(' ').length > 6 ? 'md' : 'lg'} eyebrow={'Case study · ' + post.sector} title={post.title} subtitle={post.excerpt} tags={post.tags} />
    <section className="section--tight"><div className="container">
      <div className="bn-cols bn-cols--3">{post.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
    </div></section>
    <div className="container"><figure className="bn-article-image" style={{ margin: 0 }}><img src={d.img + post.image} alt="" /></figure></div>
    <section className="section"><div className="container">
      <ArticleLayout>
        <h2>Kontekst</h2>
        <p>{post.context}</p>
        <h2>Problem</h2>
        <p>{post.problem}</p>
        <blockquote><p>„{post.quote}”</p><footer>{post.quoteAuthor}</footer></blockquote>
        <h2>Co zrobiłem</h2>
        <ol>{post.approach.map((a) => <li key={a}>{a}</li>)}</ol>
      </ArticleLayout>
    </div></section>
    <div className="container"><nav className="bn-post-nav" aria-label="Inne case studies">
      {prev && <a className="prev" href={'#/case/' + prev.slug} onClick={open(prev)}><span className="dir">← Poprzedni</span><span className="title">{prev.title}</span></a>}
      {next && <a className="next" href={'#/case/' + next.slug} onClick={open(next)}><span className="dir">Następny →</span><span className="title">{next.title}</span></a>}
    </nav></div>
    <FinalCTA title="Masz podobny problem?" intro="Opowiedz, jak dziś wygląda Wasz proces. Po 30 minutach będziesz wiedzieć, od czego zacząć." points={['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze']} avatar={d.img + 'profile.png'} onCta={(e) => { e.preventDefault(); go('contact'); }} />
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
