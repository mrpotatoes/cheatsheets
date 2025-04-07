---
title: Remove spaces from a string
---

**JavaScript version**

```js
const removeSpaces = (str) => str.replace(/\s/g, '');
```

**TypeScript version**

```js
const removeSpaces = (str: string): string => str.replace(/\s/g, '');
```

**Examples**

```js
removeSpaces('hel lo wor ld'); // 'helloworld'
```
