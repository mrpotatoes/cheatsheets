---
layout: post.njk
title: Nested Ternaries
category: JavaScript
---

Instead of something like the following

```js
if (val > root.val) {
  return contains(root.right, val)
} else if (val < root.val) {
  return contains(root.left, val)
} else {
  return true
}
```

This is a shortened version. Make sure to follow this format to make it more easily readable

```js
(val > root.val)
  ? contains(root.right, val)
  : (val < root.val)
    ? contains(root.left, val)
    : true
```
