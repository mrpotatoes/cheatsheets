---
title: Check if a string contains only ASCII characters
---

## JavaScript
```js
const isAscii = (str) => /^[\x00-\x7F]+$/.test(str)
```

## TypeScript
```ts
const isAscii = (str: string): boolean => /^[\x00-\x7F]+$/.test(str)
```
