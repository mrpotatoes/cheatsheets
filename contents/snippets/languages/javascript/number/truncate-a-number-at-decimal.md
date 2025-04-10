---
title: Truncate a number at decimal
---

**JavaScript version**

```js
const truncate = (n) => ~~n;
```

**TypeScript version**

```js
const truncate = (n: number): number => ~~n;
```

**Examples**

```js
truncate(25.198726354); // 25
truncate(-25.198726354); // -25
```
