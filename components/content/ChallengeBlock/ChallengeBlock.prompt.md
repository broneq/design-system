Problem / solution / result block inside a case study chapter (`CaseSection`). Use it for the 1-3 hardest moments of a project; ordinary narrative stays in paragraphs. Consecutive blocks stack tightly.

```jsx
<CaseSection index={5} title="Wdrożenie">
  <p>…</p>
  <ChallengeBlock label="Wyzwanie 01" title="Opór zespołu wobec zmian"
    problem="Doświadczeni spedytorzy obawiali się, że system utrudni im pracę."
    solution="Program ambasadorów: najbardziej doświadczeni pracownicy jako pierwsi użytkownicy i trenerzy."
    result="Opór spadł z 60% do 15% zespołu w trzy miesiące." />
</CaseSection>
```
