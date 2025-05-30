---
title: Check if an element is a descendant of another
group: Predicates
---

## JavaScript
```js
const isDescendant = (child, parent) => parent.contains(child)
```

## TypeScript
```js
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child)
```
