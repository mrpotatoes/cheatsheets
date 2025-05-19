---
title: Get the rank of an array of numbers
group: Retrievals
---

## JavaScript
```js
const ranking = (arr) => arr.map((x, y, z) => z.filter((w) => w > x).length + 1)
```

## TypeScript
```ts
const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter((w) => w > x).length + 1)
```

## Examples
```js
ranking([80, 65, 90, 50]) // [2, 3, 1, 4]
ranking([80, 80, 70, 50]) // [1, 1, 3, 4]
ranking([80, 80, 80, 50]) // [1, 1, 1, 4]
```
