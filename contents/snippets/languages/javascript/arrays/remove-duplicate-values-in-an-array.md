---
title: Remove duplicate values in an array
---

## JavaScript
```js
const removeDuplicate = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))
```

## TypeScript
```ts
const removeDuplicate = <T,_>(arr: T[]): T[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))
```

## Example
```js
removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']) //  ['h', 'e', 'w', 'r', 'd']
```
