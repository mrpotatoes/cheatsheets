---
title: Check if an object is a Promise
---

## JavaScript
```js
const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
```

## TypeScript
```ts
const isPromise = (obj: any): boolean => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
```
