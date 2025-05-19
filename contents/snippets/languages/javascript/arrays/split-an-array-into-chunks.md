---
title: Split an array into chunks
---

## JavaScript
```js
const chunk = (arr, size) =>
  arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [])
```

## TypeScript
```ts
const chunk = <T,>(arr: T[], size: number): T[][] =>
  arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][])
```

## Examples
```js
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4) // [[1, 2, 3, 4], [5, 6, 7, 8]]
```
