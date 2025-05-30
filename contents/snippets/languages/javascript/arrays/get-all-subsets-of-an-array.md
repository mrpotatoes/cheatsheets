---
title: Get all subsets of an array
group: Retrievals
---

## JavaScript
```js
const getSubsets = (arr) => arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]])
```

## TypeScript
```ts
const getSubsets = <T,>(arr: T[]): T[][] =>
  arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][])
```

## Examples
```js
getSubsets([1, 2]) // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```
