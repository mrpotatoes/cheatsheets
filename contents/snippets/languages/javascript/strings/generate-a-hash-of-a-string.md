---
title: Generate a hash of a string
---

## JavaScript
```js
const hash = (str) => str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0)

// Or
const hash = (str) => str.split('').reduce((prev, curr) => ((prev << 5) - prev + curr.charCodeAt(0)) | 0, 0)
```

## TypeScript
```ts
const hash = (str: string): number => str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0)

// Or
const hash = (str: string): number => str.split('').reduce((prev, curr) => ((prev << 5) - prev + curr.charCodeAt(0)) | 0, 0)
```

## Examples
```js
hash('hello') // 99162322
```
