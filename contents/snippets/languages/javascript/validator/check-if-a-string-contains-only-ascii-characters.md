---
title: Check if a string contains only ASCII characters
---

**JavaScript version**

```js
const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);
```

**TypeScript version**

```js
const isAscii = (str: string): boolean => /^[\x00-\x7F]+$/.test(str);
```
