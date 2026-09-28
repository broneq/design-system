Readable timeline row for experience or process phases - wrap rows in `<Timeline>` (an `<ol>` with a 2px `--line-strong` top rule). Desktop: period | title + meta | description | status chip. At ≤1024px the row stacks and the status chip moves onto the period line.

```jsx
<Timeline>
  <TimelineItem label="2024 - teraz" title="Architekt / konsultant AI w SDLC" meta="Niezależnie" description="Wdrożenia AI w procesie wytwarzania." status="Teraz" current />
  <TimelineItem label="Tydzień 1-2" title="Diagnoza" meta="Warsztat · pomiary" description="Mapa procesu i baseline metryk." status="2 tyg." />
</Timeline>
```

`current` inverts the status chip (ink fill) - use it on one row at most. Keep the chip short (a duration or state), it has a fixed 120px column on desktop.
