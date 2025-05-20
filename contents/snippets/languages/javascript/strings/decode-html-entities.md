---
title: Decode HTML entities
---

## JavaScript
```js
const decodeHtmlEntities = (str) => str.replace(/&#(\w+)(^\w|)?/g, (_, dec) => String.fromCharCode(dec))
```

## TypeScript
```ts
const decodeHtmlEntities = (str: string): string => str.replace(/&#(\w+)(^\w|)?/g, (_, dec) => String.fromCharCode(dec))
```
