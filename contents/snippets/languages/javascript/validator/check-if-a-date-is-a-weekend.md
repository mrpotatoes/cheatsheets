---
title: Check if a date is a weekend
---

## JavaScript
```js
// `date` is a Date object
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0
```

## TypeScript
```ts
const isWeekend = (date = new Date()): boolean => date.getDay() % 6 === 0
```
