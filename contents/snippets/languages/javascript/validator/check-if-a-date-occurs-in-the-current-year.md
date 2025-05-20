---
title: Check if a date occurs in the current year
---

## JavaScript
```js
// `date` is a Date object
const isCurrentYear = (date) => date.getUTCFullYear() === new Date().getUTCFullYear()
```

## TypeScript
```ts
const isCurrentYear = (date: Date): boolean => date.getUTCFullYear() === new Date().getUTCFullYear()
```
