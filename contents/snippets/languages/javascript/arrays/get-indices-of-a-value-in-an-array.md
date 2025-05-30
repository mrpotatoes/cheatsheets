---
title: Get indices of a value in an array
group: Retrievals
---

## JavaScript
```js
const indices = (arr, value) => arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [])

// Or
const indices = (arr, value) => arr.map((v, i) => (v === value ? i : false)).filter(Boolean)
```

## TypeScript
```ts
const indices = <T,>(arr: T[], value: T): number[] =>
  arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[])

// Or
const indices = <T,>(arr: T[], value: T): number[] =>
  arr.map((v, i) => (v === value ? i : false)).filter(Boolean) as number[]
```

## Examples
```js
indices(['h', 'e', 'l', 'l', 'o'], 'l') // [2, 3]
indices(['h', 'e', 'l', 'l', 'o'], 'w') // []
```
