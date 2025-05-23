---
title: Round a number to a given number of digits
---

## JavaScript
```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
```

## TypeScript
```ts
const round = (n: number, decimals: number = 0): number => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
```

## Examples
```js
round(1.234567, 3) // 1.235
round(1.234567, 4) // 1.2346
```
