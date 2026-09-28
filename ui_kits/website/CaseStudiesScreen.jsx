function CaseStudiesScreen({ go }) {
  const { PageHeader, CaseStudyCard, Pagination } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const [page, setPage] = React.useState(1);
  const [latest, ...rest] = d.cases;
  const card = (c, featured) => <CaseStudyCard key={c.slug} featured={featured} title={c.title} excerpt={c.excerpt} meta={[c.sector, d.readingTime(c)]} image={d.img + c.image} href={'#/case/' + c.slug} onClick={(e) => { e.preventDefault(); go('case', c.slug); }} />;
  return (<>
    <PageHeader eyebrow="Case studies" title="Wyniki, nie slajdy." subtitle="Projekty, w których zmiana procesu i architektury dała mierzalny efekt." />
    <section className="section"><div className="container">
      {card(latest, true)}
      {rest.length > 0 && <div className="bn-cols bn-cols--3">{rest.map((c) => card(c, false))}</div>}
      <Pagination current={page} total={1} onChange={setPage} />
    </div></section>
  </>);
}
window.CaseStudiesScreen = CaseStudiesScreen;
