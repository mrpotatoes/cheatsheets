---
title: Get the hours and minutes from the decimal time
---

## JavaScript
```js
const getHoursAndMinutes = (value) => [Math.floor(value), Math.floor((value * 60) % 60)]
```

## TypeScript
```ts
const getHoursAndMinutes = (value: number): [number, number] => [Math.floor(value), Math.floor((value * 60) % 60)]
```

## Examples
```js
getHoursAndMinutes(4.5) //[4, 30]
getHoursAndMinutes(7.89) // [7, 53]
```
