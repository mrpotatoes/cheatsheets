---
title: Sort the characters of a string in the alphabetical order
group: Sorting
---

## JavaScript
```js
const sort = (str) => str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('')
```

## Examples
```js
sort('hello world') // dehllloorw
```
