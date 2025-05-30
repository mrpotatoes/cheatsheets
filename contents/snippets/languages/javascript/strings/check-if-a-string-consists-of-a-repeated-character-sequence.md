---
title: Check if a string consists of a repeated character sequence
group: Predicates
---

## JavaScript
```js
const consistsRepeatedSubstring = (str) => `${str}${str}`.indexOf(str, 1) !== str.length
```

## TypeScript
```ts
const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length
```

## Examples
```js
consistsRepeatedSubstring('aa') // true
consistsRepeatedSubstring('aaa') // true
consistsRepeatedSubstring('ababab') // true
consistsRepeatedSubstring('abc') // false
```
