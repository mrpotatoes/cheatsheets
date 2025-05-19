---
title: Generate a random string using Node crypto module
---

## JavaScript
```js
const randomStr = () => require('crypto').randomBytes(32).toString('hex')
```

## TypeScript
```ts
const randomStr = (): string => require('crypto').randomBytes(32).toString('hex')
```
