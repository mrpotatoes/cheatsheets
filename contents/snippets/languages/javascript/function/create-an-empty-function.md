---
title: Create an empty function
---

**JavaScript version**

```js
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```
