---
title: Compute the greatest common divisor between two numbers
---

## JavaScript
```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
```

## TypeScript
```ts
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
```

## Examples
```js
gcd(10, 15) // 5
```
