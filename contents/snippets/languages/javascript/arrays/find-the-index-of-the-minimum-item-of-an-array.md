---
title: Find the index of the minimum item of an array
group: Discovery
---

## JavaScript
```js
const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
```

## TypeScript
```js
const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
```

## Examples
```js
indexOfMin([6, 4, 8, 2, 10]) // 3
indexOfMin([6, 4, 2, 2, 10]) // 2
```
