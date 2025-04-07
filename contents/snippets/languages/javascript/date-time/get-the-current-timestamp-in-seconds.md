---
title: Get the current timestamp in seconds
---

**JavaScript version**

```js
const ts = () => Math.floor(new Date().getTime() / 1000);
```

**TypeScript version**

```js
const ts = (): number => Math.floor(new Date().getTime() / 1000);
```
