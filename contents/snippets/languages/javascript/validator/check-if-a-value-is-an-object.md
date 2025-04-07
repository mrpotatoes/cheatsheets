---
title: Check if a value is an object
---

**JavaScript version**

```js
const isObject = (v) => v !== null && typeof v === 'object';
```

**TypeScript version**

```js
const isObject = (v: any): boolean => v !== null && typeof v === 'object';
```

**Examples**

```js
isObject(null); // false
isObject('hello world'); // false

isObject({}); // true
isObject([]); // true
```
