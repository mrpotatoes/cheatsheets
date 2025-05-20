---
title: Check if a string contains lower case characters
---

## JavaScript
```js
const containsLowerCase = (str) => str !== str.toUpperCase()
```

## TypeScript
```ts
const containsLowerCase = (str: string): boolean => str !== str.toUpperCase()
```

## Examples##
```js
containsLowerCase('Hello World') // true
containsLowerCase('HELLO WORLD') // false
```
