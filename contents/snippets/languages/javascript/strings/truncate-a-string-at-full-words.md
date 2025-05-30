---
title: Truncate a string at full words
---

## JavaScript
```js
const truncate = (str, max, suffix) => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`)
```

## TypeScript
```ts
const truncate = (str: string, max: number, suffix: string = '...'): string => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`)
```

## Examples
```js
truncate('This is a long message', 20, '...') // 'This is a long...'
```
