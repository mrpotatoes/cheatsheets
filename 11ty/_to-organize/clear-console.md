---
layout: post.njk
title: Clear Console
---

## Clear
The following snippet will clear the console and remove the scroll back.

```js
process.stdout.write("\u001b[3J\u001b[2J\u001b[1J")
console.clear()
```
