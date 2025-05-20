---
title: Convert a string to URL slug
group: Conversions
---

## JavaScript
```js
const slugify = (str) => str
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
```

## Examples
```js
slugify('Chapter One: Once upon a time...') // 'chapter-one-once-upon-a-time'
```
