---
layout: post.njk
title: Check if a URL is absolute
category: String
---

**JavaScript version**

```js
const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
```

**TypeScript version**

```js
const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
```

**Examples**

```js
isAbsoluteUrl('https://tech.libresinn.com/cheatsheet/'); // true
isAbsoluteUrl('https://tech.libresinn.com/cheatsheet/foo/bar'); // true
isAbsoluteUrl('tech.libresinn.com/cheatsheet/'); // false
isAbsoluteUrl('//tech.libresinn.com/cheatsheet/'); // false
```
