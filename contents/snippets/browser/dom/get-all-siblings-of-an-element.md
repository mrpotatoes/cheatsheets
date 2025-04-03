---
title: Get all siblings of an element
---

**JavaScript version**

```js
const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
```

**TypeScript version**

```js
const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter((child) => child !== ele) : []);
```
