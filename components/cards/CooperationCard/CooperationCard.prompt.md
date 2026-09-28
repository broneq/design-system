Engagement format (workshop, diagnosis, pilot) in a `.bn-cols--3` row. Order them as a ladder from the smallest commitment to the biggest and mark the main offer `featured` (one card at most). Give every card a link: its own page when there is one, otherwise the contact page ("Zapytaj").

```jsx
<div className="bn-cols bn-cols--3">
  <CooperationCard duration="1–2 dni" title="Warsztaty dla zespołu" ideal="..." scope={['Code review z AI', 'Testy z AI']} link="/kontakt" linkLabel="Zapytaj" />
  <CooperationCard featured duration="6–10 tygodni" title="Pilotaż AI w SDLC" ideal="..." scope={['Metryki przed / po']} link="/uslugi/pilotaz" />
</div>
```

Keep scope items short and don't repeat the process steps shown elsewhere on the page.
