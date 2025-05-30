---
title: Replace all tab characters with spaces
---

## JavaScript
```js
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces))
```

## TypeScript
```ts
const replace = (str: string, numSpaces = 4): string => str.replaceAll('\t', ' '.repeat(numSpaces))
```
