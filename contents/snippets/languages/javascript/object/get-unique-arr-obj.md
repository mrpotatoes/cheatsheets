---
title: Returns an object with unique values by key
---

## JavaScript
```js
const getUniqueArrObj = (arrObj, keyUnique) => [...new Map(arrObj.map((item) => [item[keyUnique], item])).values()]
```

## Example
```js
// Example
getUniqueArrObj([{ k: 1, e: 1 }, { k: 1, e: 1 }, { k: 3, e: 1 }], 'k') // [{ k: 1, e: 1 }, { k: 3, e: 1 }]
```
