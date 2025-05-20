---
title: Check if a string contains whitespace
---

## JavaScript
```js
const containsWhitespace = (str) => (str) => /\s/.test(str)
```

## TypeScript
```ts
const containsWhitespace =
  (str: string): boolean =>
  (str) => /\s/.test(str)
```

## Examples
```js
containsWhitespace('hello world') // true
```
