---
title: Check if a given integer is a prime number
---

## JavaScript
```js
const isPrime = (n) =>
  n > 1 &&
  Array(Math.floor(Math.sqrt(n)) - 1)
    .fill(0)
    .map((_, i) => i + 2)
    .every((i) => n % i !== 0)
```

## TypeScript
```ts
const isPrime = (n: number): boolean =>
  n > 1 &&
  Array(Math.floor(Math.sqrt(n)) - 1)
    .fill(0)
    .map((_, i) => i + 2)
    .every((i) => n % i !== 0)
```
