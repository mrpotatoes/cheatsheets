---
title: Check if a point is inside a rectangle
---

## JavaScript
```js
const isInside = (point, rect) => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom
```

## TypeScript
```js
interface Point {
  x: number
  y: number
}

interface Rect {
  bottom: number
  left: number
  top: number
  right: number
}

const isInside = (point: Point, rect: Rect): boolean => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom
```
