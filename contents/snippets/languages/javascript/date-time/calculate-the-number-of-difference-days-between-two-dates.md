---
title: Calculate the number of difference days between two dates
---

## JavaScript
```js
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
```

## TypeScript
```ts
const diffDays = (date: Date, otherDate: Date): number => Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24))
```

## Examples
```js
diffDays(new Date('2014-12-19'), new Date('2020-01-01')) // 1839
```
