---
title: Check if a year is leap year
---

## JavaScript
```js
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

// Or
// Get the number of days in February
const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29
```

## TypeScript
```ts
const isLeapYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

// Or
const isLeapYear = (year: number): boolean => new Date(year, 1, 29).getDate() === 29
```
