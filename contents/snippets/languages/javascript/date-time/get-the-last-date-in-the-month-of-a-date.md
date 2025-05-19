---
title: Get the last date in the month of a date
---

## JavaScript
```js
const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0)
```

## TypeScript
```ts
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0)
```
