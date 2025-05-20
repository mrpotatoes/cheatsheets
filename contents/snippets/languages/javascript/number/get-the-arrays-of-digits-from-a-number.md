---
title: Get the arrays of digits from a number
---

## JavaScript
```js
const digitize = (n) => `${n}`.split('').map((v) => parseInt(v, 10))

// Or
const digitize = (n) => [...`${n}`].map((v) => parseInt(v, 10))
```

## TypeScript
```ts
const digitize = (n: number): number[] => `${n}`.split('').map((v) => parseInt(v, 10))

// Or
const digitize = (n: number): number[] => [...`${n}`].map((v) => parseInt(v, 10))
```

## Examples
```js
digitize(123) // [1, 2, 3]
```
