---
title: Logical xor operator
---

## JavaScript
```js
// returns `true` if one of the arguments is truthy and the other is falsy

const xor = (a, b) => (a && !b) || (!a && b)

// Or
const xor = (a, b) => !(!a && !b) && !(a && b)

// Or
const xor = (a, b) => Boolean(!a ^ !b)
```

## Examples
```js
xor(true, true) // false
xor(false, false) // false
xor(true, false) // true
xor(false, true) // true
```
