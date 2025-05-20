---
title: Extract year, month, day, hour, minute, second and millisecond from a date
---

## JavaScript
```js
// `date` is a `Date` object
const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1)

// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
```

## TypeScript
```ts
const extract = (date: Date): string[] =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1)
```
