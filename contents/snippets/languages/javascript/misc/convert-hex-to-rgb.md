---
title: Convert hex to rgb
---

## JavaScript
```js
const hexToRgb = (hex) => hex
  .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
  .substring(1)
  .match(/.{2}/g)
  .map((x) => parseInt(x, 16))
```

## TypeScript
```ts
const hexToRgb = (hex: string): string => hex
  .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
  .substring(1)
  .match(/.{2}/g)
  .map((x) => parseInt(x, 16))
```

## Examples
```js
hexToRgb('#00ffff') // [0, 255, 255]
hexToRgb('#0ff') // [0, 255, 255]
```
