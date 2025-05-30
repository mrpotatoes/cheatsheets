---
title: Sort an array of dates
---

## JavaScript
```js
// `arr` is an array of `Date` items
const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime())

// Or
const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime())
```

## TypeScript
```ts
const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime())

// Or
const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime())
```
