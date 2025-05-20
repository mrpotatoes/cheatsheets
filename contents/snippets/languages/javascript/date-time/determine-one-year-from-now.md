---
title: Determine one year from now
---

## JavaScript
```js
const plusOneYear = ((d) => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date())
```

## TypeScript
```ts
const plusOneYear: Date = ((d) => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date())
```

## See also
- [Get the tomorrow date](/date-time/get-the-tomorrow-date)
- [Get the yesterday date](/date-time/get-the-yesterday-date)
