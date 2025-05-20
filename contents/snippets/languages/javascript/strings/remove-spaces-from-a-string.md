---
title: Remove spaces from a string
group: Casing
---

## JavaScript
```js
const removeSpaces = (str) => str.replace(/\s/g, '')
```

## TypeScript
```ts
const removeSpaces = (str: string): string => str.replace(/\s/g, '')
```

## Examples
```js
removeSpaces('hel lo wor ld') // 'helloworld'
```
