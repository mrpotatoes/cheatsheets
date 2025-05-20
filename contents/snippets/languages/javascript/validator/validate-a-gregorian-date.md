---
title: Validate a Gregorian date
---

## JavaScript
```js
// `m`: the month (zero-based index)
// `d`: the day
// `y`: the year
const isValidDate = (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate()
```

## TypeScript
```ts
const isValidDate = (m: number, d: number, y: number): boolean => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate()
```
