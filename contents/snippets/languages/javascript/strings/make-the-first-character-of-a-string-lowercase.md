---
title: Make the first character of a string lowercase
group: Casing
---

## JavaScript
```js
const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`
```

## TypeScript
```ts
const lowercaseFirst = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`
```

## Examples
```js
lowercaseFirst('Hello World') // 'hello World'
```
