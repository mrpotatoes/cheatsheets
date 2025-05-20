---
title: Get the position of an element relative to the document
group: Retrievals
---

## JavaScript
```js
const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY })

// In use
getPosition(document.body) // { left: 0, top: 0 }
```
