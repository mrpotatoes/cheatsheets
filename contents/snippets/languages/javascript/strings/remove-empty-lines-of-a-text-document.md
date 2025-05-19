---
title: Remove empty lines of a text document
group: Casing
---

## JavaScript
```js
const removeEmptyLines = (str) => str
  .split(/\r?\n/)
  .filter((line) => line.trim() !== '')
  .join('\n')
```

## Examples
```js
removeEmptyLines(`red

green
blue

yellow`)

/* Output */
/*
red
green
blue
yellow
*/
```
