---
title: Get all n-th items of an array
group: Retrievals
---

## JavaScript
```js
const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1)
```

## TypeScript
```ts
const getNthItems = <T,_>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1)
```

## Examples
```js
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) // [3, 6, 9]
```
