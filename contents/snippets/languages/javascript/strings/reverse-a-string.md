---
title: Reverse a string
---

## JavaScript
```js
const reverse = (str) => str.split('').reverse().join('')

// Or
const reverse = (str) => [...str].reverse().join('')

// Or
const reverse = (str) => str.split('').reduce((rev, char) => `${char}${rev}`, '')

// Or
const reverse = (str) => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`)
```

## TypeScript
```ts
const reverse = (str: string): string => str.split('').reverse().join('')

// Or
const reverse = (str: string): string => [...str].reverse().join('')

// Or
const reverse = (str: string): string => str.split('').reduce((rev, char) => `${char}${rev}`, '')

// Or
const reverse = (str: string): string => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`)
```

## Examples##
```js
reverse('hello world') // 'dlrow olleh'
```
