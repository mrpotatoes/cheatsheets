---
title: Check if the code is running in Jest
---

## JavaScript
```js
const isRunningInJest = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined
```

## TypeScript
```ts
const isRunningInJest: boolean = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined
```
