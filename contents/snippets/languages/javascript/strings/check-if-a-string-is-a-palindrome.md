---
title: Check if a string is a palindrome
group: Predicates
---

## JavaScript
```js
const isPalindrome = (str) => str === str.split('').reverse().join('')
```

## TypeScript
```ts
const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('')
```

## Examples
```js
isPalindrome('abc') // false
isPalindrom('abcba') // true
```
