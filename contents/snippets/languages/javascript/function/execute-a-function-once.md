---
title: Execute a function once
---

**JavaScript version**

```js
const once = (fn) =>
    (
        (ran = false) =>
        () =>
            ran ? fn : ((ran = !ran), (fn = fn()))
    )();
```

**Examples**

```js
let n = 0;
const incOnce = once(() => ++n);
incOnce(); // n = 1
incOnce(); // n = 1
incOnce(); // n = 1
```
