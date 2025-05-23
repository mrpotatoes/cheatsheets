---
title: Partition an array based on a condition
---

## JavaScript
```js
const partition = (arr, criteria) => arr.reduce((acc, i) =>
  acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]
```

## TypeScript
```ts
const partition = <T,_>(arr: T[], criteria: (a: T) => boolean): T[][] =>
  arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []])
```

## Example
```js
partition([1, 2, 3, 4, 5], (n) => n % 2) // [[1, 3, 5], [2, 4]]
```
