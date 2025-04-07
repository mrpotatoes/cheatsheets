---
title: Sort the characters of a string in the alphabetical order
---

**JavaScript version**

```js
const sort = (str) =>
    str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
```

**TypeScript version**

```js
const sort = (str: string): string =>
    str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
```

**Examples**

```js
sort('hello world'); // dehllloorw
```
