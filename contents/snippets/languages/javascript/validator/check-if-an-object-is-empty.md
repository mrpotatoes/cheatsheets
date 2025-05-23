---
title: Check if an object is empty
---

## JavaScript
```js
const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

// Or for enumerable property names only
const isEmpty = (obj) => JSON.stringify(obj) === '{}'
```

## TypeScript
```ts
const isEmpty = (obj: object): boolean => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

const isEmpty = (obj: object): boolean => JSON.stringify(obj) === '{}'
```
