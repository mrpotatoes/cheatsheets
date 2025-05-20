---
title: Get the average of an array
group: Retrievals
---

## JavaScript
```js
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
```

## TypeScript
```ts
const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length
```
