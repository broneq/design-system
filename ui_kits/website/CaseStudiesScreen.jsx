function CaseStudiesScreen({ go }) {
  const { PageHeader, CaseStudyCard, Pagination } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const [page, setPage] = React.useState(1);
  return (<>
    <PageHeader title="Studia Przypadków: Realne Problemy, Mierzalne Rezultaty" subtitle="Poniżej znajdziesz zbiór historii transformacji cyfrowych, które przeprowadziłem. Każdy projekt to dowód na to, że dobrze zaplanowana technologia jest kluczem do przewagi konkurencyjnej." />
    <section className="container"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
      {d.cases.map((c) => <CaseStudyCard key={c.slug} {...c} image={d.img + c.image} href="#" onClick={(e) => { e.preventDefault(); go('case', c.slug); }} />)}
    </div></section>
    <Pagination current={page} total={1} onChange={setPage} />
  </>);
}
window.CaseStudiesScreen = CaseStudiesScreen;
