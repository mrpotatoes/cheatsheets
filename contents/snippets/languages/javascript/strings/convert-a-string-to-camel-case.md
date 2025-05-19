---
title: Convert a string to camelCase
group: Conversions
---

## JavaScript
```js
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
```

## TypeScript
```ts
const toCamelCase = (str: string): string => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
```

## Examples
```js
toCamelCase('background-color') // backgroundColor
toCamelCase('-webkit-scrollbar-thumb') // WebkitScrollbarThumb
toCamelCase('_hello_world') // HelloWorld
toCamelCase('hello_world') // helloWorld
```
