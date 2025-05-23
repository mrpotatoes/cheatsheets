---
title: Check if multiple objects are equal
---

## JavaScript
```js
const isEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]))
```

## TypeScript
```ts
const isEqual = (...objects: object[]): boolean => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]))
```

## Examples
```js
isEqual({ foo: 'bar' }, { foo: 'bar' }) // true
isEqual({ foo: 'bar' }, { bar: 'foo' }) // false
```
