---
title: Generate an unique and increment id
---

**JavaScript version**

```js
const uid = (() => ((id = 0), () => id++))();
```

**Examples**

```js
uid(); // 0
uid(); // 1
uid(); // 2
uid(); // 3
```
