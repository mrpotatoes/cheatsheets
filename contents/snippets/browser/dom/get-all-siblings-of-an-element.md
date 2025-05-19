---
title: Get all siblings of an element
group: Retrievals
---

## JavaScript
```js
const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele)
```

## TypeScript
```js
const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter((child) => child !== ele) : [])
```
