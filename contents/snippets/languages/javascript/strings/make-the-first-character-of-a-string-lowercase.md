---
title: Make the first character of a string lowercase
group: Casing
---

**JavaScript version**

```js
const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

**TypeScript version**

```js
const lowercaseFirst = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

**Examples**

```js
lowercaseFirst('Hello World'); // 'hello World'
```
