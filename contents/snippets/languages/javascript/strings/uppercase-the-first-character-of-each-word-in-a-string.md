---
title: Uppercase the first character of each word in a string
group: Casing
---

## JavaScript version
```js
const uppercaseWords = (str) => str
  .split(' ')
  .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
  .join(' ')

// Or
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
```

## Examples
```js
uppercaseWords('hello world') // 'Hello World'
```
