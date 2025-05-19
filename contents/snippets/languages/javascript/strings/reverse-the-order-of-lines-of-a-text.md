---
title: Reverse the order of lines of a text
---

## JavaScript
```js
const reverseLines = (str) => str.split(/\r?\n/).reverse().join('\n')
```

## TypeScript
```ts
const reverseLines = (str: string): string => str.split(/\r?\n/).reverse().join('\n')
```

## Examples
```js
reverseLines(`one
two
three`)

/* Output */
/*
three
two
one
*/
```
