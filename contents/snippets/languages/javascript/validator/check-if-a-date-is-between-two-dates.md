---
title: Check if a date is between two dates
---

## JavaScript
```js
// `min`, `max` and `date` are `Date` instances
const isBetween = (date, min, max) => date.getTime() >= min.getTime() && date.getTime() <= max.getTime()
```

## TypeScript
```ts
const isBetween = (date: Date, min: Date, max: Date): boolean => date.getTime() >= min.getTime() && date.getTime() <= max.getTime()
```
