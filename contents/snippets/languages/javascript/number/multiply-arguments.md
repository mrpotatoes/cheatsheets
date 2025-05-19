---
title: Multiply arguments
---

## JavaScript
```js
const mul = (...args) => args.reduce((a, b) => a * b)
```

## TypeScript
```ts
const mul = (...args: number[]): number => args.reduce((a, b) => a * b)
```

## Examples
```js
mul(1, 2, 3, 4) // 24
```
