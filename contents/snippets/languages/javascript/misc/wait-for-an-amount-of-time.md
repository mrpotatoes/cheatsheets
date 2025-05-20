---
title: Wait for an amount of time
---

## JavaScript
```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
```

## TypeScript
```ts
const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds))
```
