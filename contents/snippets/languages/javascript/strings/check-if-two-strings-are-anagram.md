---
title: Check if two strings are anagram
group: Predicates
---

## JavaScript
```js
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
```

## TypeScript
```ts
const areAnagram = (str1: string, str2: string): boolean => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
```

## Examples
```js
areAnagram('listen', 'silent') // true
areAnagram('they see', 'the eyes') // true
areAnagram('node', 'deno') // true
```
