---
title: Calculate the distance between two points
group: calculate
---

## JavaScript
```js
const distance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
```

## TypeScript
```ts
interface Point {
  x: number
  y: number
}

const distance = (p1: Point, p2: Point): number => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
```
