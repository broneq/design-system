// Placeholder content for the UI kit - copy is not final.
// A post `body` is a list of chapters ({ title, blocks }); each chapter becomes an h2 and a table of contents entry.
// Blocks: { lead } | { p } | { h3 } | { list: [] } | { quote, by } | { challenge, title, problem, solution, result }
//   | { pullQuote: true } (the post's `quote`, once) | { stats: true } (the post's `stats` as a row).
window.BN_DATA = {
  img: '../../assets/images/',
  cases: [
    {
      slug: 'od-arkuszy-do-tms', sector: 'Logistyka · TSL', image: 'tms.png',
      period: '2015-2023', role: 'Architekt i lider projektu',
      title: 'Od arkuszy do automatyzacji.',
      excerpt: 'Osiem lat budowy systemu TMS od podstaw: od Excela i telefonów do kierowców do platformy, na której pracuje cała firma.',
      tags: ['TMS', 'PostgreSQL', 'Apache Kafka', 'Logistyka'],
      stats: [{ value: '+300%', label: 'Wydajność transportu' }, { value: '−95%', label: 'Błędy w rozliczeniach' }, { value: '3 dni → 1', label: 'Czas rozliczeń' }],
      quote: 'Nie chcieliśmy kolejnego narzędzia. Chcieliśmy rozwiązania, które zmieni sposób, w jaki pracujemy.',
      quoteAuthor: 'Dyrektor operacyjny',
      body: [
        { title: 'Punkt wyjścia', blocks: [
          { lead: 'Spedytorzy prowadzili ewidencję zleceń w Excelu, kierowcy dzwonili z pytaniami o kolejne kursy, a zarząd potrzebował tygodnia na raport wykorzystania floty. Tak wyglądała ta firma transportowa w 2015 roku.' },
          { p: 'Dziś ten sam system obsługuje setki pojazdów i tysiące zleceń miesięcznie, a raporty powstają w czasie rzeczywistym. Oto historia tej transformacji.' },
        ] },
        { title: 'Wyzwania', blocks: [
          { p: 'Branża transportowa wciąż zmaga się z cyfrową fragmentacją. Większość firm TSL prowadzi operacje w kilkunastu narzędziach, od arkuszy po karteczki. Informacje o flocie, statusie zleceń i rozliczeniach są rozproszone, więc szybkie decyzje operacyjne są niemożliwe.' },
          { p: 'Spedytorzy spędzali godziny na ręcznym zbieraniu danych, kierowcy dzwonili do biura, a zarząd nie miał realnego obrazu rentowności tras. Małe problemy operacyjne kumulowały się w straty czasu i pieniędzy.' },
          { quote: 'Spędzałem 3 godziny dziennie na dzwonieniu do kierowców, żeby sprawdzić status zleceń.', by: 'Główny spedytor' },
          { quote: 'Nigdy nie wiedzieliśmy na bieżąco, ile naprawdę zarabiamy na poszczególnych trasach.', by: 'Menedżer operacyjny' },
        ] },
        { title: 'Cele biznesowe', blocks: [
          { p: 'System TMS to nie projekt IT, tylko zmiana sposobu działania całej firmy. Zaczęliśmy od mapowania codziennych procesów: jak spedytor planuje trasy, jak kierowcy dostają zlecenia, jak księgowość rozlicza dokumenty i jak zarząd monitoruje rentowność.' },
          { p: 'Sukces zdefiniowaliśmy konkretnie, zanim powstała pierwsza linia kodu:' },
          { list: ['Czas planowania tras krótszy o co najmniej 70%', 'Wykorzystanie floty powyżej 80%', 'Raport finansowy w ciągu jednego dnia roboczego'] },
          { p: 'Każda grupa użytkowników miała inne priorytety. Dyspozytorzy potrzebowali przejrzystego zarządzania zleceniami, kierowcy informacji w telefonie, księgowość automatycznych dokumentów, a zarząd dashboardów. Wspólny cel był jeden: mniej ręcznej pracy.' },
          { pullQuote: true },
        ] },
        { title: 'Architektura', blocks: [
          { p: 'Technologia miała wynikać z potrzeb biznesu i możliwości zespołu, a nie z trendów. PHP dał szybkość rozwoju i łatwy dostęp do programistów. PostgreSQL w układzie master-slave oddzielił operacje transakcyjne od ciężkich zapytań raportowych. Od początku zakładaliśmy kilkukrotny wzrost liczby zleceń.' },
          { p: 'Każda operacja trafiała do dziennika zdarzeń (audit log) ze względów prawnych i wymogów ISO. System obsługuje wrażliwe dane finansowe, więc dostał wielopoziomowe uprawnienia, szyfrowanie połączeń i regularne backupy z szybkim odtwarzaniem.' },
          { challenge: 'Wyzwanie', title: 'Dwustronna integracja ze starym systemem rozliczeń', problem: 'Rozliczenia nadal działały w starym systemie, który przechowywał znacznie uboższą strukturę danych niż nowy TMS.', solution: 'Kolejkowy system integracji, który zachowywał kolejność zdarzeń i mapował bogate dane na strukturę starego systemu.', result: 'Oba systemy pracowały równolegle bez utraty krytycznych informacji.' },
          { p: 'Każdy obszar funkcjonalny był osobnym modułem, rozwijanym i testowanym niezależnie. Najlepsza architektura to ta, którą zespół klienta utrzyma po zakończeniu projektu, dlatego stawiałem na przejrzysty kod i dokumentację.' },
        ] },
        { title: 'Wdrożenie', blocks: [
          { p: 'Wdrożenie TMS to maraton, nie sprint, bo firma musi cały czas działać. Zanim powstał kod, przeprowadziliśmy setki godzin rozmów z kierownikami transportu własnego, spedycji, sprzedaży i operacji. To mapowanie procesów było fundamentem projektu.' },
          { p: 'MVP objęło tylko najbardziej krytyczne operacje: zlecenia i statusy. Potem co kilka dni kolejny zespół zaczynał pracę w systemie, a jego uwagi trafiały do poprawek od razu.' },
          { quote: 'Pierwsza wersja była prosta, ale już wtedy oszczędzała mi godzinę dziennie.', by: 'Spedytor z grupy pilotażowej' },
          { challenge: 'Wyzwanie 01', title: 'Opór zespołu wobec zmian', problem: 'Doświadczeni spedytorzy obawiali się, że system utrudni im pracę i zastąpi ich doświadczenie.', solution: 'Program ambasadorów: najbardziej doświadczeni pracownicy jako pierwsi użytkownicy, a potem trenerzy pozostałych zespołów.', result: 'Opór spadł z 60% do 15% zespołu w trzy miesiące.' },
          { challenge: 'Wyzwanie 02', title: 'Dwa systemy równolegle', problem: 'Przez trzy miesiące stary i nowy system działały jednocześnie, co podwajało pracę administracyjną.', solution: 'Migracja zespół po zespole z weryfikacją krzyżową zleceń w obu systemach.', result: 'Zero utraconych danych i przejście bez zakłócenia operacji.' },
          { challenge: 'Wyzwanie 03', title: 'Rozliczenia bez API', problem: 'Stary system rozliczeniowy nie miał API, a wymiana danych musiała działać w obie strony.', solution: 'Własny konektor z kolejką synchronizacji, który mapował dane między systemami.', result: 'Błędy w rozliczeniach spadły o 95%, a raport powstaje w dzień zamiast tygodnia.' },
          { p: 'Wdrażaliśmy nie tylko system, ale nowe procesy pracy w całej organizacji, od sprzedaży po rozliczenia.' },
        ] },
        { title: 'Rezultaty', blocks: [
          { lead: 'Dokumenty przewozowe, faktury i raporty, które przygotowywano przez pół dnia, powstają w kilka minut. Spedytorzy widzą każdy pojazd i status zlecenia na mapie w czasie rzeczywistym.' },
          { stats: true },
          { p: 'Kierowcy dostają zlecenia w aplikacji zamiast faksem, więc czas reakcji spadł z godzin do minut. Wizualne harmonogramy pojazdów uprościły planowanie floty własnej.' },
          { p: 'Na open space zawisły ekrany z dostępnością pojazdów na żywo. Każdy widzi „dziurę” w harmonogramie, na przykład anulowane zlecenie albo wcześniejszy powrót z trasy, i od razu ją zagospodarowuje.' },
          { quote: 'Kierowcy przestali dzwonić z pytaniem, gdzie odebrać przesyłkę. Widzą to w aplikacji.', by: 'Kierownik działu spedycji' },
          { p: 'Rozliczenia, które trwały do trzech dni roboczych, zajmują jeden dzień. Decyzje zapadają na podstawie danych z bieżącego dnia, a nie raportów sprzed tygodni.' },
        ] },
        { title: 'Skalowanie', blocks: [
          { p: 'System rósł razem z firmą. Aplikacja mobilna dla kierowców powstała na prośbę zespołu operacyjnego. Panel dla przewoźników zewnętrznych uprościł współpracę z podwykonawcami, a rozliczanie dokumentów na bieżąco zastąpiło comiesięczne sesje, które paraliżowały księgowość.' },
          { challenge: 'Wyzwanie', title: 'Kilkukrotnie więcej danych niż zakładano', problem: 'Po roku intensywnej pracy część operacji zwolniła.', solution: 'Refaktoring bazy PostgreSQL, nowe indeksy, cache i kolejki Apache Kafka dla raportów i synchronizacji z systemami zewnętrznymi.', result: 'System działa płynnie przy znacznie większym obciążeniu.' },
          { p: 'Integracje z telematyką dały dokładne czasy realizacji, a integracje z kluczowymi klientami przekazują statusy bez ręcznego raportowania.' },
          { quote: 'Kiedy potrzebujemy nowej funkcji, wiemy, że można ją dodać bez przebudowy wszystkiego.', by: 'Dyrektor operacyjny' },
        ] },
        { title: 'Wnioski dla firm TSL', blocks: [
          { p: 'Decyzja „budować czy kupować” zależy od procesów firmy. Gotowy SaaS sprawdza się w standardowych operacjach. Gdy procesy są unikalne, własny system bywa tańszy w długim terminie.' },
          { h3: 'Sygnały ostrzegawcze' },
          { list: ['Dostawca nie pyta o specyfikę Twojej branży i sprzedaje „uniwersalne rozwiązanie”', 'Nie da się przetestować systemu na prawdziwych danych przez co najmniej miesiąc', 'Przez miesiąc nie widzisz działającej funkcji', 'Nikt nie zajmuje się niechęcią zespołu do zmiany'] },
          { lead: 'Sukces systemu TMS zależy w 70% od zarządzania zmianą, a tylko w 30% od technologii.' },
        ] },
        { title: 'Co zrobiłbym inaczej', blocks: [
          { h3: 'Więcej czasu na szkolenia' },
          { p: 'Planowałem dwa tygodnie na wdrożenie zespołu, a potrzebowałem sześciu. Każdy dział miał własny sposób pracy, który trzeba było przełożyć na system.' },
          { h3: 'Szkolenia z każdej nowej funkcji' },
          { p: 'Nowe funkcje ogłaszałem krótką wiadomością na Slacku. Zespół nie wiedział, po co są, więc leżały nieużywane miesiącami. Dziś każda dostałaby 15\u2011minutowe demo i krótkie wideo dla nowych pracowników.' },
          { quote: 'Gdybym zaczynał dziś, poświęciłbym więcej czasu na zrozumienie codziennej pracy spedytorów.', by: 'Przemysław Broniszewski' },
        ] },
      ],
    },
    {
      slug: 'synchronizacja-kafka', sector: 'Integracja danych', image: 'kafka.png',
      period: '2021, 9 miesięcy', role: 'Architekt integracji',
      title: '480 GB w czasie rzeczywistym.',
      excerpt: 'Synchronizacja dwóch centrów danych i czterech systemów z opóźnieniem poniżej 50 ms.',
      tags: ['Apache Kafka', 'CDC', 'Integracja'],
      stats: [{ value: '<50 ms', label: 'Opóźnienie synchronizacji' }, { value: '480 GB', label: 'Wolumen danych' }, { value: '4', label: 'Zintegrowane systemy' }],
      quote: 'Pierwszy raz raport o 9:00 pokazuje to, co dzieje się o 9:00.',
      quoteAuthor: 'Kierownik controllingu',
      body: [
        { title: 'Kontekst', blocks: [{ p: 'Dwa centra danych, cztery systemy i nocne eksporty CSV. Dane rozjeżdżały się w ciągu dnia, a raporty pokazywały stan sprzed doby.' }] },
        { title: 'Problem', blocks: [{ p: 'Każda nowa integracja była osobnym projektem, a awaria jednego eksportu blokowała pozostałe.' }, { pullQuote: true }] },
        { title: 'Co zrobiłem', blocks: [{ list: ['Zastąpiłem eksporty strumieniem zmian (CDC) na Apache Kafka.', 'Ustaliłem z zespołami jeden kontrakt zdarzeń zamiast czterech formatów.', 'Dodałem monitoring opóźnień widoczny dla biznesu, nie tylko dla IT.'] }] },
        { title: 'Efekt', blocks: [{ lead: 'Raporty pokazują stan z bieżącej minuty, a nie sprzed doby. Nowy system podłącza się do strumienia w dni, a nie w miesiące.' }, { stats: true }, { p: 'Awaria jednej integracji nie zatrzymuje pozostałych, bo każda czyta strumień we własnym tempie.' }] },
      ],
    },
    {
      slug: 'wdrozenia-kubernetes', sector: 'DevOps · Platforma', image: 'kubernetes.png',
      period: '2020, 6 miesięcy', role: 'Architekt platformy',
      title: 'Wdrożenie bez nocnych telefonów.',
      excerpt: 'Migracja na Kubernetes i CI/CD: wdrożenie przestało być wydarzeniem i stało się 30-minutową rutyną.',
      tags: ['Kubernetes', 'CI/CD', 'DevOps'],
      stats: [{ value: '30 min', label: 'Czas wdrożenia' }, { value: 'Codziennie', label: 'Częstotliwość wdrożeń' }, { value: '0', label: 'Nocnych incydentów w kwartale' }],
      quote: 'Wdrożenie w piątek po południu przestało być żartem.',
      quoteAuthor: 'Tech lead',
      body: [
        { title: 'Kontekst', blocks: [{ p: 'Wdrożenia odbywały się raz w miesiącu, w nocy, z udziałem całego zespołu. Tylko jedna osoba wiedziała, jak odtworzyć środowisko.' }] },
        { title: 'Problem', blocks: [{ p: 'Rzadkie wdrożenia oznaczały duże zmiany, a duże zmiany oznaczały awarie. Koło się zamykało.' }, { pullQuote: true }] },
        { title: 'Co zrobiłem', blocks: [{ list: ['Opisałem infrastrukturę jako kod, żeby każde środowisko dało się odtworzyć w minutach.', 'Zbudowałem potok CI/CD z testami, który wdraża małe zmiany bez udziału człowieka.', 'Przeszkoliłem zespół, żeby platforma nie zależała ode mnie.'] }] },
        { title: 'Efekt', blocks: [{ lead: 'Zespół wdraża codziennie, w godzinach pracy i bez nocnych dyżurów. Nowe środowisko powstaje w kilka minut.' }, { stats: true }, { p: 'Platforma działa bez mnie: zespół sam ją rozwija i szkoli kolejne osoby.' }] },
      ],
    },
  ],
};
