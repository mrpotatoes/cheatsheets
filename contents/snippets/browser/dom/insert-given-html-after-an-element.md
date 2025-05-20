---
title: Insert given HTML after an element
group: Insert
---

## JavaScript
```js
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html)
```

## TypeScript
```js
const insertHtmlAfter = (html: string, ele: Element): void => ele.insertAdjacentHTML('afterend', html)
```
