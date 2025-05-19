---
title: Check if all array elements are equal to a given value
---

## JavaScript
```js
const isEqual = (arr, value) => arr.every((item) => item === value)

// Or
// Ends earlier for false arrays
const isEqual = (arr, value) => !arr.some((item) => item !== value)
```

## Examples
```js
isEqual(['foo', 'foo'], 'foo') // true
isEqual(['foo', 'bar'], 'foo') // false
isEqual(['bar', 'bar'], 'foo') // false
```
