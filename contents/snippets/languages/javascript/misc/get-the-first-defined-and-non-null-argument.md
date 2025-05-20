---
title: Get the first defined and non null argument
---

## JavaScript
```js
const coalesce = (...args) => args.find((item) => item !== undefined && item !== null)

// Or
const coalesce = (...args) => args.find((item) => ![undefined, null].includes(item))
```

## TypeScript
```ts
const coalesce = (...args: any[]): any[] => args.find((item) => item !== undefined && item !== null)

// Or
const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item))
```

## Examples
```js
coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
```
