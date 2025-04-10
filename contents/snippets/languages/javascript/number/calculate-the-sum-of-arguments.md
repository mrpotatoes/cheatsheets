---
title: Calculate the sum of arguments
---

**JavaScript version**

```js
const sum = (...args) => args.reduce((a, b) => a + b);
```

**TypeScript version**

```js
const sum = (...args: number[]): number => args.reduce((a, b) => a + b);
```

**Examples**

```js
sum(1, 2, 3, 4); // 10
```
