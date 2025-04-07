---
title: Calculate the division of arguments
---

**JavaScript version**

```js
const division = (...args) => args.reduce((a, b) => a / b);
```

**TypeScript version**

```js
const division = (...args: number): number => args.reduce((a, b) => a / b);
```

**Examples**

```js
division(1, 2, 3, 4); // 0.04166666666666666
```
