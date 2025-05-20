---
title: Check if the code is running in the browser
---

## JavaScript
```js
const isBrowser = typeof window === 'object' && typeof document === 'object'
```

## TypeScript
```ts
const isBrowser: boolean = typeof window === 'object' && typeof document === 'object'
```
