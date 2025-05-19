---
title: Insert an element before other one
group: Insert
---

## JavaScript
```js
const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle)

// Or
const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele)
```

## TypeScript
```js
const insertBefore = (ele: Element, anotherEle: Element): Element | null => (anotherEle.parentNode ? anotherEle.parentNode.insertBefore(ele, anotherEle) : null)

// Or
const insertBefore = (ele: Element, anotherEle: Element) => anotherEle.insertAdjacentElement('beforebegin', ele)
```
