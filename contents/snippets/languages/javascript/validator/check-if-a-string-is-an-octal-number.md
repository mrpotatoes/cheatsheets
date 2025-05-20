---
title: Check if a string is an octal number
---

## JavaScript
```js
const isOctal = (str) => /^(0o)?[0-7]+$/i.test(str)
```

## TypeScript
```ts
const isOctal = (str: string): boolean => /^(0o)?[0-7]+$/i.test(str)
```
