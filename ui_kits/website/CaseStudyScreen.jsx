function CaseStudyScreen({ go, slug }) {
  const { PageHeader, Stat, ArticleLayout, Button, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
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
    <section className="section">
      <ArticleLayout>
        <h2>Kontekst</h2>
        <p>{post.context}</p>
        <h2>Problem</h2>
        <p>{post.problem}</p>
        <blockquote><p>„{post.quote}”</p><footer>{post.quoteAuthor}</footer></blockquote>
        <h2>Co zrobiłem</h2>
        <ol>{post.approach.map((a) => <li key={a}>{a}</li>)}</ol>
      </ArticleLayout>
    </section>
    <nav className="container" aria-label="Inne case studies" style={{ display: 'flex', justifyContent: 'space-between', gap: 24, paddingBlock: 32, borderTop: '1px solid var(--line-default)' }}>
      <div>{prev && <Button variant="link" href="#" onClick={open(prev)}>← {prev.title}</Button>}</div>
      <div>{next && <Button variant="link" href="#" onClick={open(next)} arrow>{next.title}</Button>}</div>
    </nav>
    <FinalCTA title="Masz podobny problem?" intro="Opowiedz, jak dziś wygląda Wasz proces. Po 30 minutach będziesz wiedzieć, od czego zacząć." points={['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze']} avatar={d.img + 'profile.png'} onCta={(e) => { e.preventDefault(); go('contact'); }} />
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
