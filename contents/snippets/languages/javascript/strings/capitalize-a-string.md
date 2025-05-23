---
title: Capitalize a string
---

## JavaScript
```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`

// Or
const capitalize = (str) => str.replace(/^([a-z])/, (first) => first.toUpperCase())
```

## TypeScript
```ts
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

// Or
const capitalize = ([first, ...rest]: string): string => `${first.toUpperCase()}${rest.join('')}`

// Or
const capitalize = (str: string): string => str.replace(/^([a-z])/, (first) => first.toUpperCase())
```

## Examples
```js
capitalize('hello world') // 'Hello world'
```
