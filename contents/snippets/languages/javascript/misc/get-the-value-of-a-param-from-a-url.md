---
title: Get the value of a param from a URL
---

## JavaScript
```js
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param)
```

## TypeScript
```ts
const getParam = (url: string, param: string): string | null =>
  new URLSearchParams(new URL(url).search).get(param)
```

## Examples
```js
getParam('http://domain.com?message=hello', 'message') // 'hello'
```
