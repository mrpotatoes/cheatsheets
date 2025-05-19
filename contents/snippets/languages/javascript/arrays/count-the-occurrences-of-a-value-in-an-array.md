---
title: Count the occurrences of a value in an array
---

## JavaScript
```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

// Or
const countOccurrences = (arr, val) => arr.filter((item) => item === val).length
```

## TypeScript
```ts
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

// Or
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.filter((item) => item === val).length
```

## Examples
```js
countOccurrences([2, 1, 3, 3, 2, 3], 2) // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a') // 3
```
