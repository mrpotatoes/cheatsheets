---
title: Compare two dates
---

## JavaScript
```js
// `a` and `b` are `Date` instances
const compare = (a, b) => a.getTime() > b.getTime()
```

## TypeScript
```ts
const compare = (a: Date, b: Date): boolean => a.getTime() > b.getTime()
```

## Example
```js
compare(new Date('2020-03-30'), new Date('2020-01-01')) // true
```
