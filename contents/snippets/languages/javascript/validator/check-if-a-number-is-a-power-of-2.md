---
title: Check if a number is a power of 2
---

## JavaScript
```js
const isPowerOfTwo = (n) => (n & (n - 1)) === 0
```

## TypeScript
```ts
const isPowerOfTwo = (n: number): boolean => (n & (n - 1)) === 0
```

## Examples
```js
isPowerOfTwo(256) // true
isPowerOfTwo(129) // false
```
