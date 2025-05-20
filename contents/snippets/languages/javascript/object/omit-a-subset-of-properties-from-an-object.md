---
title: Omit a subset of properties from an object
---

## JavaScript
```js
const omit = (obj, keys) =>
  Object.keys(obj)
    .filter((k) => !keys.includes(k))
    .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {})
```

## Examples
```js
omit({ a: '1', b: '2', c: '3' }, ['a', 'b']) // { c: '3' }
```
