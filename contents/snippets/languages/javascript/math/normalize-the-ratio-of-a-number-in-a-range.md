---
title: Normalize the ratio of a number in a range
---

## JavaScript
```js
const normalizeRatio = (value, min, max) => (value - min) / (max - min)
```

## TypeScript
```ts
const normalizeRatio = (value: number, min: number, max: number): number => (value - min) / (max - min)
```
