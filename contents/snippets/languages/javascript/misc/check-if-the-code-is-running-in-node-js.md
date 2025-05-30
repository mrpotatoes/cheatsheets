---
title: Check if the code is running in NodeJS
---

## JavaScript
```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null
```

## TypeScript
```ts
const isNode: boolean = typeof process !== 'undefined' && process.versions != null && process.versions.node != null
```
