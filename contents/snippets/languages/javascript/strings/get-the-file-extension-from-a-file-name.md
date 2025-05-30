---
title: Get the file extension from a file name
group: Retrivals
---

## JavaScript
```js
const ext = (fileName) => fileName.split('.').pop()
```

## TypeScript
```ts
const ext = (fileName: string): string => fileName.split('.').pop()
```
