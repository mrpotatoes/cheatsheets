---
title: Convert 3 digits color to 6 digits color
---

## JavaScript
```js
const toFullHexColor = (color) =>
  `#${(color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map((c) => `${c}${c}`)
    .join('')}`
```

## TypeScript
```ts
const toFullHexColor = (color: string): string =>
  `#${(color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map((c) => `${c}${c}`)
    .join('')}`
```

## Examples
```js
toFullHexColor('123') // '#112233'
toFullHexColor('#123') // '#112233'
toFullHexColor('#abc') // '#aabbcc'
```
