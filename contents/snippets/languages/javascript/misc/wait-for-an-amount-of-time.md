---
title: Wait for an amount of time
---

**JavaScript version**

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```

**TypeScript version**

```js
const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```
