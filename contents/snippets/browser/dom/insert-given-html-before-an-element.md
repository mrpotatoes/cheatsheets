---
title: Insert given HTML before an element
group: Insert
---

## JavaScript
```js
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html)
```

## TypeScript
```js
const insertHtmlBefore = (html: string, ele: Element): void => ele.insertAdjacentHTML('beforebegin', html)
```
