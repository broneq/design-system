function ServiceScreen({ go }) {
  const { Button } = window.BroniszewskiDesignSystem_db82bc;
  const li = (b, t) => <li style={{ marginBottom: '0.75rem' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--bn-primary)', marginRight: '0.5rem' }}></i><strong>{b}</strong> {t}</li>;
  const h2 = { fontWeight: 700, lineHeight: 1.3, marginTop: '2.5rem', marginBottom: '1.25rem' };
  const p = { lineHeight: 1.8, marginBottom: '1.5rem' };
  const ul = { listStyle: 'none', paddingLeft: 0, marginBottom: '1.5rem' };
  return (<>
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bn-light)', textAlign: 'center' }}><div className="container">
      <h1 style={{ marginBottom: '0.5rem' }}>Twoja konkurencja wdraża zmiany 10 razy dziennie. Ile razy Ty?</h1>
      <p style={{ marginTop: '0.5rem', color: 'var(--bn-gray)' }}>DevOps i automatyzacja</p>
      <p style={{ marginTop: '1rem', fontWeight: 500 }}>Zmienimy wdrożenia z pełnego napięcia wydarzenia w przewidywalny, zautomatyzowany proces.</p>
    </div></section>
    <section className="section"><div className="container">
      <h2 style={h2}>Koniec z teatrem pt. "Dzień Wdrożenia"</h2>
      <p style={p}>Jeśli ten scenariusz brzmi znajomo, to znaczy, że tracisz czas i pieniądze. Zbliża się wdrożenie. Zespół jest w pełnej gotowości. Napięcie rośnie. Coś idzie nie tak i zaczyna się nerwowe szukanie przyczyny.</p>
      <ul style={ul}>
        {li('Długie cykle wdrożeniowe:', 'Od pomysłu do działającej funkcji mijają tygodnie lub miesiące, a Ty tracisz przewagę rynkową.')}
        {li('"Wszystkie ręce na pokład":', 'Kluczowi specjaliści zamiast tworzyć innowacje, spędzają godziny na ręcznym procesie wdrożenia.')}
        {li('Ciągłe "gaszenie pożarów":', 'Zespół jest w permanentnym trybie reaktywnym, naprawiając skutki niestabilnych wdrożeń.')}
      </ul>
      <h2 style={h2}>Rozwiązanie: Budujemy linię produkcyjną dla Twojego oprogramowania</h2>
      <p style={p}>DevOps to nie zestaw narzędzi, to budowa zautomatyzowanej linii montażowej dla Twojego kodu.</p>
      <ul style={ul}>
        {li('Automatyzacja Wdrożeń (CI/CD):', 'Stworzymy potok, który sam testuje, integruje i wdraża kod na serwery.')}
        {li('Infrastruktura jako Kod (IaC):', 'Przekształcimy konfigurację Twoich serwerów w cyfrowy plan architektoniczny.')}
        {li('Inteligentny Monitoring i Alerty:', 'Wdrożymy systemy wczesnego ostrzegania, które pozwolą reagować, zanim klienci zauważą problem.')}
      </ul>
    </div></section>
    <section style={{ backgroundColor: 'var(--bn-light)', textAlign: 'center', padding: '3rem 0' }}><div className="container">
      <h2>Chcesz, by Twój zespół wdrażał zmiany 10 razy dziennie?</h2>
      <p style={{ marginBottom: '1rem' }}>Porozmawiajmy o Twoich wyzwaniach podczas bezpłatnej konsultacji.</p>
      <Button href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>Umów bezpłatną konsultację</Button>
    </div></section>
  </>);
}
window.ServiceScreen = ServiceScreen;
