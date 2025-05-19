---
title: Check if a value is a regular expression
---

## JavaScript
```js
const isRegExp = (value) => Object.prototype.toString.call(value) === '[object RegExp]'
```

## TypeScript
```ts
const isRegExp = (value: any): boolean => Object.prototype.toString.call(value) === '[object RegExp]'
```
