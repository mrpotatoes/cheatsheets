---
title: Swap case of characters in a string
group: Casing
---

## JavaScript
```js
const swapCase = (str) => str
  .split('')
  .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
  .join('')
```

## Examples
```js
swapCase('Hello World') // 'hELLO wORLD'
```
