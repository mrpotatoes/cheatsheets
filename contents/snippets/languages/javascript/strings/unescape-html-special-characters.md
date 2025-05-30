---
title: Unescape HTML special characters
group: Casing
---

## JavaScript
```js
const unescape = (str) => str
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#0*39;/g, "'")
  .replace(/&quot;/g, '"')
```

## TypeScript
```ts
const unescape = (str: string): string => str
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#0*39;/g, "'")
  .replace(/&quot;/g, '"')
```
