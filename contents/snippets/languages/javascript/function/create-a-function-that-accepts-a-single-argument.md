---
title: Create a function that accepts a single argument
---

## JavaScript
```js
const unary = (fn) => (arg) => fn(arg)
```

## Examples
```js
['1', '2', '3', '4', '5'].map(unary(parseInt)) // [1, 2, 3, 4, 5]
```
