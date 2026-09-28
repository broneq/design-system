// Heading ids for the table of contents: "Wnioski dla firm TSL" -> "wnioski-dla-firm-tsl"
const slugify = (t) => t.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function CaseStudyScreen({ go, slug }) {
  const { ArticleHeader, ArticleLayout, TagList, Stat, ChallengeBlock, PullQuote, FinalCTA } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const i = Math.max(0, d.cases.findIndex((c) => c.slug === slug));
  const post = d.cases[i], prev = d.cases[i - 1], next = d.cases[i + 1];
  const open = (c) => (e) => { e.preventDefault(); go('case', c.slug); };
  const chapters = post.body.map((c) => ({ ...c, id: slugify(c.title) }));
  const words = JSON.stringify(post.body).split(/\s+/).length;
  const block = (b, k) =>
    b.lead ? <p key={k} className="lead">{b.lead}</p>
    : b.p ? <p key={k}>{b.p}</p>
    : b.h3 ? <h3 key={k}>{b.h3}</h3>
    : b.list ? <ul key={k}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
    : b.quote ? <blockquote key={k}><p>„{b.quote}”</p><footer>{b.by}</footer></blockquote>
    : b.challenge ? <ChallengeBlock key={k} label={b.challenge} title={b.title} problem={b.problem} solution={b.solution} result={b.result} />
    : b.pullQuote ? <PullQuote key={k} quote={post.quote} role={post.quoteAuthor} />
    : b.stats ? <div key={k} className="bn-cols bn-cols--3">{post.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
    : null;
  return (<>
    <ArticleHeader back={{ label: 'Case studies', href: '#/cases', onClick: (e) => { e.preventDefault(); go('cases'); } }}
      eyebrow={'Case study · ' + post.sector} title={post.title} excerpt={post.excerpt}
      meta={[post.period, post.role, Math.max(1, Math.round(words / 180)) + ' min czytania']} cover={d.img + post.image} />
    <div className="container bn-article-body">
      <ArticleLayout toc={chapters.map((c) => ({ id: c.id, label: c.title }))}>
        {chapters.map((c, ci) => [
          <h2 key={c.id} id={c.id}><span className="num" aria-hidden="true">{String(ci + 1).padStart(2, '0')}</span>{c.title}</h2>,
          ...c.blocks.map((b, bi) => block(b, c.id + bi)),
        ])}
        <TagList items={post.tags} />
      </ArticleLayout>
    </div>
    <div className="container bn-article-grid">
      <nav className="bn-post-nav" aria-label="Inne case studies">
        {prev && <a className="prev" href={'#/case/' + prev.slug} onClick={open(prev)}><span className="dir">← Poprzedni</span><span className="title">{prev.title}</span></a>}
        {next && <a className="next" href={'#/case/' + next.slug} onClick={open(next)}><span className="dir">Następny →</span><span className="title">{next.title}</span></a>}
      </nav>
    </div>
    <FinalCTA title="Masz podobne wyzwanie?" intro="Opowiedz, jak dziś wygląda Wasz proces. Po 30 minutach będziesz wiedzieć, od czego zacząć." points={['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze']} avatar={d.img + 'profile.png'} onCta={(e) => { e.preventDefault(); go('contact'); }} />
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
