---
title: Check if a flat array has duplicate values
---

## JavaScript
```js
const hasDuplicateValues = (arr) => new Set(arr).size !== arr.length

// Or
const hasDuplicateValues = (arr) => arr.some((item, index, arr) => arr.indexOf(item) !== index)
```

## TypeScript
```ts
const hasDuplicateValues = <T,_>(arr: T[]): boolean => new Set(arr).size !== arr.length

// Or
const hasDuplicateValues = <T,_>(arr: T[]): boolean => arr.some((item, index, arr) => arr.indexOf(item) !== index)
```

## Examples
```js
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']) // true
hasDuplicateValues(['w', 'o', 'r', 'd']) // false
```
