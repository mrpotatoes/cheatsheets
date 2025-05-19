---
title: Check if a number is positive
---

## JavaScript
```js
const isPositive = (n) => Math.sign(n) === 1
```

## TypeScript
```ts
const isPositive = (n: number): boolean => Math.sign(n) === 1
```

## Examples##
```js
isPositive(3) // true
isPositive(-8) // false
```
