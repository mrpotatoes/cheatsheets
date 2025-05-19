---
title: Strip HTML from a given text
---

## JavaScript
```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || ''
```

## TypeScript
```js
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || ''
```
