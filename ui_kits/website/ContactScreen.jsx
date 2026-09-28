function ContactScreen() {
  const { PageHeader, ContactForm, Button } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  return (<>
    <PageHeader title="Zacznijmy Rozmowę o Twoim Biznesie" subtitle="Wypełnienie poniższego formularza zajmie Ci nie więcej niż 2 minuty. To wystarczy, abym mógł przygotować się do naszej bezpłatnej konsultacji i zaproponować konkretne rozwiązania." />
    <div className="container bn-cols bn-cols--2" style={{ paddingBlock: 'var(--space-8)' }}>
      <div style={{ position: 'relative', color: '#fff', overflow: 'hidden' }}>
        <img src={d.img + 'desk.png'} alt="Biurko" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 12, 16, 0.72)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <h2 style={{ color: '#fff' }}>Przemysław Broniszewski</h2>
          <p style={{ marginBottom: '1.5rem', color: '#fff' }}>Masz pytania? Wypełnij formularz, a w ciągu 24h odezwę się, by umówić 60-minutową, bezpłatną konsultację strategiczną. Jeśli wolisz mniej formalny kontakt, znajdziesz mnie również na LinkedIn.</p>
          <Button variant="inverse" href="https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/" target="_blank">Zobacz profil na LinkedIn</Button>
        </div>
      </div>
      <div><ContactForm /></div>
    </div>
  </>);
}
window.ContactScreen = ContactScreen;
