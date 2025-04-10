---
title: Multiply arguments
---

**JavaScript version**

```js
const mul = (...args) => args.reduce((a, b) => a * b);
```

**TypeScript version**

```js
const mul = (...args: number[]): number => args.reduce((a, b) => a * b);
```

**Examples**

```js
mul(1, 2, 3, 4); // 24
```
