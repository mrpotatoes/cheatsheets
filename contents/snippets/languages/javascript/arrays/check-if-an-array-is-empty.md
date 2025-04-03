---
title: Check if an array is empty
---

**JavaScript version**

```js
// `arr` is an array
const isEmpty = (arr) => Array.isArray(arr) && !arr.length;
```

**TypeScript version**

```js
const isEmpty = <T,_>(arr: T[]): boolean => Array.isArray(arr) && !arr.length;
```

**Examples**

```js
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```
