---
title: Format a string
group: Conversions
---

## JavaScript
```js
const format = (str, ...vals) => vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str)
```

## TypeScript
```ts
const format = (str: string, ...vals: unknown[]): string => vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str)
```

## Examples
```js
const template = 'My name is {0} and I am {1} years old'

format(template, 'John', 30))
// My name is John and I am 30 years old

format(template, 'Jane', 20)
// My name is Jane and I am 20 years old
```
