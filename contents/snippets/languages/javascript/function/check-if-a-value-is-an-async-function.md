---
title: Check if a value is an async function
---

**JavaScript version**

```js
const isAsyncFunction = (v) => Object.prototype.toString.call(v) === '[object AsyncFunction]';
```

**Examples**

```js
isAsyncFunction(function () {}); // false
isAsyncFunction(function* () {}); // false
isAsyncFunction(async function () {}); // true
```
