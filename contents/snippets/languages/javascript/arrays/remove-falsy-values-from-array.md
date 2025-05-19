---
title: Remove falsy values from array
---

## JavaScript
```js
const removeFalsy = (arr) => arr.filter(Boolean)
```

## TypeScript
```ts
const removeFalsy = <T,_>(arr: T[]): T[] => arr.filter(Boolean)
```

## Example
```js
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false])
// ['a string', true, 5, 'another string']
```
