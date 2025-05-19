---
title: Trim some character
---

## JavaScript
```js
const trim = (str, char) => str.split(char).filter(Boolean).join()
```

## TypeScript
```ts
const trim = (str: string, char: string): string => str.split(char).filter(Boolean).join()
```

## Examples
```js
trim('/hello world//', '/') // hello world
trim('"hello world"', '"') // hello world
trim('   hello world ', ' ') // hello world
```
