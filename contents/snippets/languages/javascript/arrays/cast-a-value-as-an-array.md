---
title: Cast a value as an array
group: test
---

## JavaScript
```js
const castArray = (value) => (Array.isArray(value) ? value : [value])
```

## TypeScript
```ts
const castArray = <T,_>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value])
```

## Examples
```js
castArray(1) // [1]
castArray([1, 2, 3]) // [1, 2, 3]
```
