---
title: Generate a random string from given characters
---

## JavaScript
```js
const generateString = (length, chars) =>
  Array(length)
    .fill('')
    .map((v) => chars[Math.floor(Math.random() * chars.length)])
    .join('')
```

## Examples
```js
generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
```
