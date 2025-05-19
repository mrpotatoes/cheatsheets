---
title: Generate a random integer in given range
---

## JavaScript
```js
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
```

## TypeScript
```ts
const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min
```
