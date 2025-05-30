---
title: Check if a rectangle overlaps other one
---

## JavaScript
```js
// Returns true if `a` overlaps `b`
// (x1, y1) and (x2, y2) are top-left and bottom-right corners
const overlaps = (a, b) => (a.x1 < b.x2 && b.x1 < a.x2) || (a.y1 < b.y2 && b.y1 < a.y2)
```

## TypeScript
```ts
interface Rect {
  x1: number
  x2: number
  y1: number
  y2: number
}

const contains = (a: Rect, b: Rect): boolean => (a.x1 < b.x2 && b.x1 < a.x2) || (a.y1 < b.y2 && b.y1 < a.y2)
```
