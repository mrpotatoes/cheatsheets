---
title: Check if a path is relative
group: Predicates
---

## JavaScript
```js
const isRelative = (path) => !/^([a-z]+:)?[\\/]/i.test(path)
```

## TypeScript
```ts
const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path)
```

## Examples
```js
isRelative('/foo/bar/baz') // false
isRelative('C:\\foo\\bar\\baz') // false
isRelative('foo/bar/baz.txt') // true
isRelative('foo.md') // true
```
