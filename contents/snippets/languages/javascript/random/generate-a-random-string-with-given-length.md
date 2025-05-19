---
title: Generate a random string with given length
---

## TypeScript
```js
const generateString = (length: number): string =>
  Array(length)
    .fill('')
    .map((v) => Math.random().toString(36).charAt(2))
    .join('')
```
