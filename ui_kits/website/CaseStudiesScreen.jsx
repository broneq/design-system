function CaseStudiesScreen({ go }) {
  const { PageHeader, CaseStudyCard, Pagination } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const [page, setPage] = React.useState(1);
  return (<>
    <PageHeader eyebrow="Case studies" title="Wyniki, nie slajdy." subtitle="Projekty, w których zmiana procesu i architektury dała mierzalny efekt." />
    <section className="section"><div className="container">
      <div className="bn-cols bn-cols--3">
        {d.cases.map((c) => <CaseStudyCard key={c.slug} title={c.title} excerpt={c.excerpt} tags={c.tags} image={d.img + c.image} href="#" onClick={(e) => { e.preventDefault(); go('case', c.slug); }} />)}
      </div>
      <Pagination current={page} total={1} onChange={setPage} />
    </div></section>
  </>);
}
window.CaseStudiesScreen = CaseStudiesScreen;
