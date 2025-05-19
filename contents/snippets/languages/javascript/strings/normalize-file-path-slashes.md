---
title: Normalize file path slashes
group: Casing
---

## JavaScript
```js
const normalizePath = (path) => path.replace(/[\\/]+/g, '/')
```

## TypeScript
```ts
const normalizePath = (path: string): string => path.replace(/[\\/]+/g, '/')
```

## Examples##
```js
normalizePath('\\foo\\bar\\baz\\') // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/') // ./foo/bar/baz/
```
