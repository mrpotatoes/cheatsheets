---
title: Get the day of the year from a date
---

## JavaScript
```js
// `date` is a Date object
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
```

## TypeScript
```ts
const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24))
```

## Example
```js
dayOfYear(new Date(2020, 04, 16)) // 137
```
