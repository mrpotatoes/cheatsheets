---
title: Get the file name from a URL
group: Retrivals
---

**JavaScript version**

```js
const fileName = (url: string): string => url.substring(url.lastIndexOf('/') + 1);
```

**TypeScript version**

```js
const fileName = (url: string): string => url.substring(url.lastIndexOf('/') + 1);
```

**Examples**

```js
fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
```
