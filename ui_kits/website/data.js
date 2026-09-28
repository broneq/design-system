window.BN_DATA = {
  img: '../../assets/images/',
  cases: [
    { slug:'od-arkuszy-do-automatyzacji', title:'Od arkuszy do automatyzacji: system TMS, który zwiększył wydajność o 300%', excerpt:'Historia stworzenia kompleksowego systemu TMS od podstaw – case study z 8-letniej transformacji cyfrowej w branży TSL.', image:'tms.png', tags:['TMS','Automatyzacja','Logistyka'], result:'+300% Wydajności Transportu' },
    { slug:'integracja-danych-kafka', title:'Jak zsynchronizowaliśmy 480GB danych z opóźnieniem poniżej 50ms', excerpt:'Wyobraź sobie synchronizację 480GB danych między dwoma centrami danych w czasie rzeczywistym, obsługując 4 niezależne systemy naraz. Brzmi jak koszmar? Zbudowaliśmy system, który robi to z opóźnieniem poniżej 50ms.', image:'kafka.png', tags:['Integracja Danych','Apache Kafka','CDC'], result:'<50ms Opóźnienia Synchronizacji Danych' },
    { slug:'transformacja-kubernetes-cicd', title:'Od chaosu do kontroli: jak Kubernetes uratował nasz zespół przed nocnymi deploymentami', excerpt:'Telefon o 2:30 w nocy, bo kolejny deployment się wysypał? Tak wyglądały nasze wdrożenia. Dziś ten sam proces trwa 30 minut, działa w pełni automatycznie i nie wymaga nocnych interwencji. Zobacz, jak to zrobiliśmy.', image:'kubernetes.png', tags:['Kubernetes','CI/CD','DevOps'], result:'Z 8h do 30 Minut Czasu Deploymentu' },
  ],
  problems: ['Zespół IT mówi językiem niezrozumiałym dla biznesu.','Projekty technologiczne trwają dłużej i kosztują więcej niż planowano.','Kluczowe procesy w firmie zależą od jednej osoby w dziale IT.','Inwestujesz w technologie, nie mając pewności co do ich zwrotu.','Masz wrażenie, że technologia hamuje rozwój firmy zamiast go wspierać.'],
  serviceGroups: [
    { name:'FUNDAMENTY I STRATEGIA', services:[
      { icon:'fa-magnifying-glass-chart', title:'Audyt technologiczny i strategia IT', points:['Jak inwestować w IT, by zapewnić realny zwrot (ROI)?','Jak uporządkować pracę i procesy w rosnącym zespole?','Jak przełamać technologiczny paraliż i przyspieszyć rozwój?'], cta:'Zaplanuj strategię IT' },
      { icon:'fa-gears', title:'Projektowanie i wdrażanie procesów IT', points:['Jak skalować zespół techniczny bez utraty wydajności?','Jak sprawić, by sukcesy projektowe stały się powtarzalne?','Jak uwolnić się od ciągłego "gaszenia pożarów"?'], cta:'Uporządkuj procesy w firmie' },
      { icon:'fa-user-tie', title:'Doradztwo technologiczne', points:['Jak mieć pewność, że technologia wspiera strategię firmy?','Jak skutecznie zarządzać zespołem IT, nie będąc ekspertem?','Jak zyskać wiedzę CTO, płacąc tylko za realne wsparcie?'], cta:'Zyskaj wsparcie strategiczne' } ] },
    { name:'ROZWÓJ I WDROŻENIA', services:[
      { icon:'fa-arrows-rotate', title:'DevOps i automatyzacja', points:['Jak skrócić czas wprowadzania zmian z tygodni do godzin?','Jak zminimalizować ryzyko awarii przy każdym wdrożeniu?','Jak uwolnić zespół od powtarzalnych, ręcznych zadań?'], cta:'Wdrażaj szybciej i bezpieczniej', page:'service' },
      { icon:'fa-clipboard-list', title:'Kierowanie projektami IT', points:['Jak odzyskać kontrolę nad harmonogramem i budżetem?','Jak skutecznie zarządzać ryzykiem w złożonym projekcie?','Jak mieć pewność, że projekt dostarczy obiecaną wartość?'], cta:'Zrealizuj projekt z sukcesem' },
      { icon:'fa-cloud-arrow-up', title:'Modernizacja i migracja do chmury', points:['Jak przestać płacić za serwery, których nie używasz?','Jak zapewnić gotowość firmy na nagły wzrost ruchu?','Jak uwolnić się od problemów ze starym sprzętem?'], cta:'Przejdź na nowoczesną chmurę' } ] },
    { name:'OPTYMALIZACJA I BEZPIECZEŃSTWO', services:[
      { icon:'fa-shield-halved', title:'Bezpieczeństwo IT i infrastruktura sieciowa', points:['Jak spać spokojnie, wiedząc, że dane są bezpieczne (RODO)?','Jak ochronić reputację firmy przed jednym cyberatakiem?','Jak zapewnić bezpieczną i wydajną pracę zdalną?'], cta:'Zabezpiecz swoją firmę' },
      { icon:'fa-users', title:'Audyt działu IT', points:['Jak mieć pewność, że budżet IT przynosi realny zwrot?','Dlaczego w zespole technicznym panuje chaos i rotacja?','Jak sprawić, by IT zaczęło wreszcie rozumieć biznes?'], cta:'Zbuduj wydajny dział IT' },
      { icon:'fa-diagram-project', title:'Integracja systemów i synchronizacja danych', points:['Jak wyeliminować kosztowne błędy z ręcznego wprowadzania danych?','Jak zapewnić, by wszyscy w firmie pracowali na tych samych danych?','Jak odzyskać czas, który zespół marnuje na powtarzalne zadania?'], cta:'Połącz swoje systemy' } ] },
  ],
  steps: [
    { title:'Bezpłatna konsultacja (60 min)', items:['analiza obecnej sytuacji technologicznej','identyfikacja głównych wyzwań','wstępne rekomendacje'] },
    { title:'Propozycja rozwiązania', items:['szczegółowy plan działania','harmonogram i kamienie milowe','przejrzysta wycena'] },
    { title:'Realizacja', items:['regularne spotkania kontrolne i raportowanie','ścisła współpraca z zespołem','dokumentacja wszystkich zmian'] },
    { title:'Transfer wiedzy', items:['szkolenia dla zespołu','dokumentacja procesów','zapewnienie autonomii'] },
  ],
  formats: [
    { icon:'fa-box-open', title:'Projekt jednorazowy', subtitle:'1-6 miesięcy', ideal:'Dla konkretnych wyzwań technologicznych z jasno określonym celem.', scope:'od audytu i analizy po pełną implementację', examples:'migracja do chmury, wdrożenie CI/CD, integracja systemów' },
    { icon:'fa-handshake-angle', title:'Współpraca długoterminowa', subtitle:'abonament', ideal:'Dla firm potrzebujących stałego wsparcia strategicznego i bieżącego doradztwa.', scope:'regularne konsultacje, wsparcie w decyzjach, monitoring postępów', examples:'rola zewnętrznego CTO, doradztwo przy rozwoju produktu' },
    { icon:'fa-bolt', title:'Konsulting doraźny', ideal:'W przypadku pilnych problemów lub jednokrotnych konsultacji.', scope:'szybka diagnoza, emergency support, ekspertyza w konkretnej kwestii', examples:'analiza awarii, second opinion, przegląd architektury' },
    { icon:'fa-diagram-project', title:'Zarządzanie projektami IT', ideal:'Dla firm bez doświadczonych project managerów lub przy krytycznych projektach.', scope:'pełne zarządzanie projektem od planowania po wdrożenie', examples:'nowy system IT, modernizacja infrastruktury, integracje' },
  ],
};
