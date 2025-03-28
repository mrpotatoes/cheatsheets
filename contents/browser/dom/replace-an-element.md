---
title: Replace an element
---

**JavaScript version**

```js
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
```

**TypeScript version**

```js
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null);
```
