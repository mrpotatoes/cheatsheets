---
title: Convert a Windows file path to Unix path
group: Conversions
---

## JavaScript
```js
const toUnixPath = (path) => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '')
```

## TypeScript
```ts
const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '')
```

## Examples
```js
toUnixPath('./foo/bar/baz') // foo/bar/baz
toUnixPath('C:\\foo\\bar\\baz') // /foo/bar/baz
```
