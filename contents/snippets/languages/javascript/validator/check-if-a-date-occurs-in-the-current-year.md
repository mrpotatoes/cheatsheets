---
title: Check if a date occurs in the current year
---

**JavaScript version**

```js
// `date` is a Date object
const isCurrentYear = (date) => date.getUTCFullYear() === new Date().getUTCFullYear();
```

**TypeScript version**

```js
const isCurrentYear = (date: Date): boolean => date.getUTCFullYear() === new Date().getUTCFullYear();
```
