---
title: Convert a letter to associate emoji
group: Conversions
---

## JavaScript
```js
const letterToEmoji = (c) => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365)
```

## TypeScript
```ts
const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365)
```

## Examples
```js
letterToEmoji('a') // 🇦
letterToEmoji('b') // 🇧
```
