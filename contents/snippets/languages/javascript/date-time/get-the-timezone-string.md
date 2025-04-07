---
title: Get the timezone string
---

**JavaScript version**

```js
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
```

**TypeScript version**

```js
const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;
```

**Example**

```js
getTimezone(); // 'Asia/Saigon'
```
