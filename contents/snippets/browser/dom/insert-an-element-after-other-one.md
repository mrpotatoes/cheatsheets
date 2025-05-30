---
title: Insert an element after other one
group: Insert
---

## JavaScript
```js
const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling)

// Or
const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele)
```

## TypeScript
```js
const insertAfter = (ele: Element, anotherEle: Element): Element | null => (anotherEle.parentNode ? anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling) : null)

// Or
const insertAfter = (ele: Element, anotherEle: Element): Element | null => anotherEle.insertAdjacentElement('afterend', ele)
```
