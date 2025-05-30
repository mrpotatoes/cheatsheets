---
title: Check if a string contains only letters and numbers
---

## JavaScript
```js
const isAlphanumeric = (str) => /^[0-9A-Z]+$/i.test(str)
```

## TypeScript
```ts
const isAlphanumeric = (str: string): boolean => /^[0-9A-Z]+$/i.test(str)
```

## Examples
```js
isAlphanumeric('helloworld') // true
isAlphanumeric('HelloWorld') // true
isAlphanumeric('hello world') // false
isAlphanumeric('hello123') // true
isAlphanumeric('hello 123') // false
```
