---
title: Get a random item from an array
---

## JavaScript
```js
const randomItem = (arr) => arr[(Math.random() * arr.length) | 0]
```

## TypeScript
```ts
const randomItem = <T,_>(arr: T[]): T => arr[(Math.random() * arr.length) | 0]
```
