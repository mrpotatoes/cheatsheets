---
title: Convert a string to PascalCase
group: Conversions
---

## JavaScript
```js
const toPascalCase = (str) => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')
```

## TypeScript
```ts
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')
```

## Examples
```js
toPascalCase('hello world') // 'HelloWorld'
toPascalCase('hello.world') // 'HelloWorld'
toPascalCase('foo_bar-baz') // FooBarBaz
```
