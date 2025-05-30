---
title: Find the minimum item of an array by given key
group: Discovery
---

## JavaScript
```js
const minBy = (arr, key) => arr.reduce((a, b) => (a[key] < b[key] ? a : b), {})
```

## TypeScript
```ts
const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
  arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T)
```

## Example
```js
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]
minBy(people, 'age') // { name: 'Bar', age: 24 }
```
