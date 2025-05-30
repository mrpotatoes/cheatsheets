---
title: Get the number of days in given month
---

## JavaScript
```js
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate()
```

## TypeScript
```ts
const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate()
```
