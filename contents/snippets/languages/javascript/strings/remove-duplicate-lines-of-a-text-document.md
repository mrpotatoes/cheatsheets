---
title: Remove duplicate lines of a text document
group: Casing
---

## JavaScript
```js
const removeDuplicateLines = (str) => Array.from(new Set(str.split(/\r?\n/))).join('\n')
```

## TypeScript
```ts
const removeDuplicateLines = (str: string): string => Array.from(new Set(str.split(/\r?\n/))).join('\n')
```

## Examples
```js
removeDuplicateLines(`one
three
two
three
one
four`)

/* Output */
/*
one
three
two
four
*/
```
