---
title: Get the first date in the month of a date
---

## JavaScript
```js
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1)
```

## TypeScript
```ts
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1)
```
