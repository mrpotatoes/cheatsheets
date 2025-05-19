---
title: Get union of arrays
group: Retrievals
---

## JavaScript
```js
const union = (...arr) => [...new Set(arr.flat())]
```

## TypeScript version
```ts
const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())]
```

## Example
```js
union([1, 2], [2, 3], [3]) // [1, 2, 3]
```
