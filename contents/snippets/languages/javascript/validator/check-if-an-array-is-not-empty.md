---
title: Check if an array is not empty
---

## JavaScript
```js
const isNotEmpty = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0
```

## TypeScript
```ts
const isNotEmpty = (arr: any): boolean => Array.isArray(arr) && Object.keys(arr).length > 0
```

## Examples
```js
isNotEmpty([]) // false
isNotEmpty([1, 2, 3]) // true
```
