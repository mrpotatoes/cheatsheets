---
title: Check if a value is a business identifier code
---

## JavaScript
```js
const isBIC = (value) => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value)
```

## TypeScript
```ts
const isBIC = (value: string): boolean => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value)
```
