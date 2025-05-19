---
title: Check if a date is today
---

## JavaScript
```js
// `date` is a Date object
const isToday = (date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
```

## TypeScript
```ts
const isToday = (date: Date): boolean => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
```
