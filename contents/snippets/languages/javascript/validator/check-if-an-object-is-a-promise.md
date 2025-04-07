---
title: Check if an object is a Promise
---

**JavaScript version**

```js
const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```

**TypeScript version**

```js
const isPromise = (obj: any): boolean => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```
