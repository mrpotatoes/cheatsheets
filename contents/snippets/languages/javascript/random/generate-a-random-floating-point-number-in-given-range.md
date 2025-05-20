---
title: Generate a random floating point number in given range
---

## JavaScript
```js
const randomFloat = (min, max) => Math.random() * (max - min) + min
```

## TypeScript
```ts
const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min
```
