---
title: Check if a number is in a given range
---

## JavaScript
```js
const inRange = (num, a, b, threshold = 0) => Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold
```

## TypeScript
```ts
const inRange = (num: number, a: number, b: number, threshold: number = 0): boolean => Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold
```

## Examples
```js
inRange(10, 5, 15) // true
inRange(10, 5, 6) // false
inRange(10, 15, 5) // true
inRange(-10, -5, -15) // true
```
