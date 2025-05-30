---
title: Create an array of numbers in the given range
---

## JavaScript
```js
const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min)

// Or
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)

// Or
const range = (min, max) =>
  Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i)
```

## TypeScript
```ts
const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map((i) => i + min)

// Or
const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i)

// Or
const range = (min: number, max: number): number[] =>
  Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i)
```

## Example
```js
range(5, 10) // [5, 6, 7, 8, 9, 10]
```
