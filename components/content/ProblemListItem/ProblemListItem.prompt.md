Pain-point bullet for the "Rozpoznajesz te sytuacje?" section, plus `TextSeparator`, the left-aligned punchline that closes the list (a string ending in "." gets the blue period).

```jsx
<ul style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1rem 2rem',listStyle:'none'}}>
  <ProblemListItem text="Zespół IT mówi językiem niezrozumiałym dla biznesu." />
</ul>
<TextSeparator>Jesteś w dobrym miejscu. Rozwiązuję takie problemy od ponad 20 lat.</TextSeparator>
```
