---
title: Trim slashes at the beginning and the end of a string
---

## JavaScript
```js
const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')

// Or
const trimSlashes = (str) => str.split('/').filter(Boolean).join('/')
```

## TypeScript
```ts
const trimSlashes = (str: string): string => str.replace(/^\/+|\/+$/g, '')

// Or
const trimSlashes = (str: string): string => str.split('/').filter(Boolean).join('/')
```

## Examples
```js
trimSlashes('//hello/world///') // hello/world
```
