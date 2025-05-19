---
title: Initialize the current date but set time to midnight
---

## JavaScript
```js
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0))
```

## TypeScript
```ts
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0))
```
