---
title: Check if a value is a number
---

## JavaScript
```js
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value)
```

## TypeScript
```ts
const isNumber = (value: any): number => !isNaN(parseFloat(value)) && isFinite(value)
```
