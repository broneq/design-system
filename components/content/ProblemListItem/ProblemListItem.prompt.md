Pain-point row for a "Rozpoznajesz to?" list, plus `TextSeparator`, the left-aligned punchline that closes the list (a string ending in "." gets the blue period).

```jsx
<div className="bn-cols bn-cols--split">
  <SectionHeader eyebrow="Rozpoznajesz to?" title="AI jest." titleMuted="Efektu nie ma." />
  <div>
    <ul>
      <ProblemListItem text="Kod powstaje szybciej, ale kolejka do review rośnie." />
      <ProblemListItem text="Licencje kosztują, a lead time się nie zmienił." />
    </ul>
    <TextSeparator>Problemem nie jest narzędzie. Jest nim proces.</TextSeparator>
  </div>
</div>
```

`marker` replaces the arrow: "01", "02" for steps, "+" / "−" for fit and misfit lists (`ul.bn-fit-list` under its own Eyebrow).
