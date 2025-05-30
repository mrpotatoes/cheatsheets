---
title: Check if a string contains upper case characters
---

## JavaScript
```js
const containsUpperCase = (str) => str !== str.toLowerCase()
```

## TypeScript
```ts
const containsUpperCase = (str: string): boolean => str !== str.toLowerCase()
```

## Examples
```js
containsUpperCase('Hello World') // true
containsUpperCase('hello world') // false
```
