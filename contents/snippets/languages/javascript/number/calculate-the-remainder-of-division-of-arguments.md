---
title: Calculate the remainder of division of arguments
---

## JavaScript
```js
const remainder = (...args) => args.reduce((a, b) => a % b)
```

## TypeScript
```ts
const remainder = (...args: number[]): number => args.reduce((a, b) => a % b)
```

## Examples
```js
remainder(1, 2, 3, 4) // 1
```
