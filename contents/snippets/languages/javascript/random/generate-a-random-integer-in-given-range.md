---
title: Generate a random integer in given range
---

**JavaScript version**

```js
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

**TypeScript version**

```js
const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
```
