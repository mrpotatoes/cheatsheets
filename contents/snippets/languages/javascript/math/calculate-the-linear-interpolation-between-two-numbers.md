---
title: Calculate the linear interpolation between two numbers
---

## JavaScript
```js
const lerp = (a, b, amount) => (1 - amount) * a + amount * b
```

## TypeScript
```ts
const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b
```
