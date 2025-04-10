---
title: Count the number of words in a string
group: Counting
---

**JavaScript version**

```js
const countWords = (str) => str.trim().split(/\s+/).length;
```

**TypeScript version**

```js
const countWords = (str: string): number => str.trim().split(/\s+/).length;
```

**Examples**

```js
countWords('Hello World'); // 2
countWords('Hello    World'); // 2
countWords('  Hello  World  '); // 2
```
