---
title: Replace an element
group: Page Interactions
---

**JavaScript version**

```js
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
```

**TypeScript version**

```js
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null);
```
