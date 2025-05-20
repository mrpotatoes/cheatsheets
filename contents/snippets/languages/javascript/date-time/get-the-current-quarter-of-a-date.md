---
title: Get the current quarter of a date
---

## JavaScript
```js
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3)
```

## TypeScript
```ts
const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3)
```
