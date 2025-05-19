---
title: Subtract arguments
---

## JavaScript
```js
const subtract = (...args) => args.reduce((a, b) => a - b)
```

## TypeScript
```ts
const subtract = (...args: number[]): number => args.reduce((a, b) => a - b)
```

## Examples
```js
subtract(1, 2, 3, 4) // -8
```
