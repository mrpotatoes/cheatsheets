---
title: Check if a value is an object
---

## JavaScript
```js
const isObject = (v) => v !== null && typeof v === 'object'
```

## TypeScript
```ts
const isObject = (v: any): boolean => v !== null && typeof v === 'object'
```

## Examples
```js
isObject(null) // false
isObject('hello world') // false

isObject({}) // true
isObject([]) // true
```
