---
title: Convert snake_case to camelCase
group: Conversions
---

## JavaScript
```js
const snakeToCamel = (str) => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1))
```

## TypeScript
```ts
const snakeToCamel = (str: string): string => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1))
```

## Examples
```js
snakeToCamel('HELLO_world') // 'helloWorld'
```
