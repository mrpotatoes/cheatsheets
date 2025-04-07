---
title: Check if the code is running in the browser
---

**JavaScript version**

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```

**TypeScript version**

```js
const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';
```
