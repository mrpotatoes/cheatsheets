---
title: Convert an array of strings to numbers
---

## JavaScript
```js
const toNumbers = (arr) => arr.map(Number)

// Or
const toNumbers = (arr) => arr.map((x) => + x)
```

## TypeScript
```ts
const toNumbers = (arr: string[]): number[] => arr.map(Number)

// Or
const toNumbers = (arr: string[]): number[] => arr.map((x) => +x)
```

## Example
```js
toNumbers(['2', '3', '4']) // [2, 3, 4]
```
