---
title: Check if a value is a generator function
---

## JavaScript
```js
const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]'
```

## Examples
```js
isGeneratorFunction(function () {}) // false
isGeneratorFunction(function* () {}) // true
```
