---
title: Emulate a dice throw
---

**JavaScript version**

```js
const throwdice = () => ~~(Math.random() * 6) + 1;
```

**TypeScript version**

```js
const throwdice = (): number => ~~(Math.random() * 6) + 1;
```

**Examples**

```js
throwdice(); // 4
throwdice(); // 1
throwdice(); // 6
```
