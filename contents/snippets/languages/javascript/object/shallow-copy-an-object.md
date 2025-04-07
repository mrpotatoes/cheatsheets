---
title: Shallow copy an object
---

**JavaScript version**

```js
const shallowCopy = obj => Object.assign({}, obj);

// or
const shallowCopy = obj => {...obj};
```
