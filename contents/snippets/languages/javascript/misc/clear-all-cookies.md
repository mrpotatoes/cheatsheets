---
title: Clear all cookies
---

## JavaScript
```js
const clearCookies = () =>
  document.cookie
    .split(';')
    .forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)))
```

## Examples
```js
clearCookies()
```
