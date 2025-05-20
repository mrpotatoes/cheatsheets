---
title: Replace multiple spaces with a single space
---

## JavaScript
```js
// Replace spaces, tabs and new line characters
const replaceSpaces = (str) => str.replace(/\s\s+/g, ' ')

// Only replace spaces
const replaceOnlySpaces = (str) => str.replace(/  +/g, ' ')
```

## TypeScript
```ts
const replaceSpaces = (str: string): string => str.replace(/\s\s+/g, ' ')

const replaceOnlySpaces = (str: string): string => str.replace(/  +/g, ' ')
```

## Examples
```js
replaceSpaces('this\n   is     \ta    \rmessage') // 'this is a message'
```
