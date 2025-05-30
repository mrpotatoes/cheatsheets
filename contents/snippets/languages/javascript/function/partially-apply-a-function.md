---
title: Partially apply a function
---

## JavaScript
```js
const partial =
  (fn, ...a) =>
  (...b) =>
    fn(...a, ...b)
```

## Examples
```js
const sum = (x, y) => x + y
const inc = partial(sum, 1)
inc(9) // 10
```
