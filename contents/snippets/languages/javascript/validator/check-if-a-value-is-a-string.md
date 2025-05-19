---
title: Check if a value is a string
---

## JavaScript
```js
const isString = (value) => Object.prototype.toString.call(value) === '[object String]'
```

## TypeScript
```ts
const isString = (value: any): boolean => Object.prototype.toString.call(value) === '[object String]'
```

## Examples
```js
isString('hello world') // true
isString(new String('hello world')) // true
isString(10) // false
```
