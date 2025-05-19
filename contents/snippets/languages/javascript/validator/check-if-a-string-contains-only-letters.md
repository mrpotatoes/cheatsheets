---
title: Check if a string contains only letters
---

## JavaScript
```js
const isAlpha = (str) => /^[A-Z]+$/i.test(str)
```

## TypeScript
```ts
const isAlpha = (str: string): boolean => /^[A-Z]+$/i.test(str)
```

## Examples
```js
isAlpha('helloworld') // true
isAlpha('HelloWorld') // true
isAlpha('hello world') // false
isAlpha('0123456789') // false
```
