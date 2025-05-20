---
title: Check if a date is a weekday
---

## JavaScript
```js
// `date` is a Date object
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0
```

## TypeScript
```ts
const isWeekday = (date = new Date()): boolean => date.getDay() % 6 !== 0
```
