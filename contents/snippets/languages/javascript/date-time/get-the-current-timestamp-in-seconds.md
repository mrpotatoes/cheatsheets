---
title: Get the current timestamp in seconds
---

## JavaScript
```js
const ts = () => Math.floor(new Date().getTime() / 1000)
```

## TypeScript
```ts
const ts = (): number => Math.floor(new Date().getTime() / 1000)
```
