---
title: Calculate the number of months between two dates
---

## JavaScript
```js
const monthDiff = (startDate, endDate) =>
  Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
```

## TypeScript
```ts
const monthDiff = (startDate: Date, endDate: Date): number =>
  Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
```

## Example
```js
monthDiff(new Date('2020-01-01'), new Date('2021-01-01')) // 12
```
