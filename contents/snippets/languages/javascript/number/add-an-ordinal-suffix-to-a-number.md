---
title: Add an ordinal suffix to a number
---

## JavaScript
```js
// `n` is a position number
const addOrdinal = (n) => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`
```

## TypeScript
```ts
const addOrdinal = (n: number): string => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`
```

## Examples
```js
addOrdinal(1) // '1st'
addOrdinal(2) // '2nd'
addOrdinal(3) // '3rd'
addOrdinal(11) // '11th'
addOrdinal(12) // '12th'
addOrdinal(13) // '13th'
```
