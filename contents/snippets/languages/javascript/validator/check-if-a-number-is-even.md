---
title: Check if a number is even
---

## JavaScript
```js
const isEven = (n) => n % 2 === 0

// Or
const isEven = (n) => (n & 1) === 0

// Or
const isEven = (n) => !(n & 1)

// Or
const isEven = (n) => Number.isInteger(n / 2)
```

## TypeScript
```ts
const isEven = (n: number): boolean => n % 2 === 0

// Or
const isEven = (n: number): boolean => (n & 1) === 0

// Or
const isEven = (n: number): boolean => !(n & 1)

// Or
const isEven = (n: number): boolean => Number.isInteger(n / 2)
```

## Examples
```js
isEven(1) // false
isEven(2) // true
```
