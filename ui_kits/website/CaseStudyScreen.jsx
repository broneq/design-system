function CaseStudyScreen({ go, slug }) {
  const { PageHeader, ArticleLayout, ArticleImage, Button } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const i = Math.max(0, d.cases.findIndex((c) => c.slug === slug));
  const post = d.cases[i], prev = d.cases[i - 1], next = d.cases[i + 1];
  const k8s = post.slug === 'transformacja-kubernetes-cicd';
  return (<>
    <PageHeader title={post.title} subtitle={post.excerpt} tags={post.tags} />
    <section style={{ margin: '40px 0' }}><div className="container"><img src={d.img + post.image} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'block' }} /></div></section>
    <ArticleLayout>
      {k8s ? (<>
        <p>Była 2:30 w nocy, gdy telefon zadzwonił po raz trzeci w tym tygodniu. Kolejny deployment się wysypał, klient krzyczy, a jedyna osoba w zespole, która wie jak to naprawić, właśnie wróciła z urlopu. Brzmi znajomo?</p>
        <h2>Punkt wyjścia - Architektura Bólu</h2>
        <p>Czy znacie to uczucie, gdy telefon dzwoni o 2 w nocy i wiecie, że to nie może być nic dobrego? Tak wyglądało nasze życie jeszcze 4 lata temu. Każdy deployment był loterią - albo wszystko działało, albo ktoś z zespołu musiał wstać i naprawiać system do rana.</p>
        <h2>Moment Prawdy - Kiedy Skala Zabija</h2>
        <p>Przełomowy moment przyszedł w momencie, gdy biznes przestał tolerować przestoje. Klienci zaczęli wymagać, żeby systemy działały bez przerwy. Zero downtime stało się standardem, nie luksusem.</p>
        <h2>Rezultaty - Liczby Nie Kłamią</h2>
        <ul><li><strong>Oszczędność: 95% czasu</strong></li><li><strong>Wzrost: 1000%</strong></li><li><strong>Poprawa: 100%</strong></li></ul>
      </>) : (<>
        <h2>Wyzwanie Biznesowe</h2>
        <blockquote><p>„Potrzebowaliśmy systemu, który da nam kontrolę nad operacją. Nie chcieliśmy kolejnego narzędzia - chcieliśmy rozwiązanie, które zmieni sposób, w jaki pracujemy.” - Dyrektor Operacyjny</p></blockquote>
        <h2>Architektura Rozwiązania</h2>
        <ArticleImage src={d.img + 'architektura-rozwiazania.png'} alt="Architektura rozwiązania" caption="Architektura rozwiązania" />
        <p style={{ color: 'var(--bn-gray)', fontStyle: 'italic' }}>[Treść skrócona w UI kit — pełny tekst w repozytorium: src/content/case-studies/{post.slug}.mdx]</p>
      </>)}
    </ArticleLayout>
    <section style={{ backgroundColor: 'var(--bn-light)', padding: '60px 0' }}><div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
      <div style={{ background: '#fff', border: '1px solid var(--bn-border)', borderRadius: 8, padding: '1.5rem' }}><h3>Kluczowy rezultat</h3><p>{post.result}</p></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', alignItems: 'flex-start' }}><h3 style={{ margin: 0 }}>Masz podobne wyzwanie?</h3><p>Porozmawiajmy o tym, jak mogę pomóc Twojej firmie.</p><Button href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>Umów bezpłatną konsultację</Button></div>
    </div></section>
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 20px', borderTop: '1px solid var(--bn-border)', fontWeight: 600 }}>
      <div>{prev && <a href="#" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); go('case', prev.slug); }}>← Poprzedni Projekt</a>}</div>
      <div>{next && <a href="#" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); go('case', next.slug); }}>Następny Projekt →</a>}</div>
    </nav>
  </>);
}
window.CaseStudyScreen = CaseStudyScreen;
