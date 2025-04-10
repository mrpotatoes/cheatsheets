---
title: Decode HTML entities
---

**JavaScript version**

```js
const decodeHtmlEntities = (str) => str.replace(/&#(\w+)(^\w|;)?/g, (_, dec) => String.fromCharCode(dec));
```

**TypeScript version**

```js
const decodeHtmlEntities = (str: string): string => str.replace(/&#(\w+)(^\w|;)?/g, (_, dec) => String.fromCharCode(dec));
```
