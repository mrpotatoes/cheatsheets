---
title: Toggle an element
group: Page Interactions
---

## JavaScript
```js
const toggle = (ele) => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none')

// Or
const toggle = (ele) => (ele.hidden = !ele.hidden)
```

## TypeScript
```js
const toggle = (ele: HTMLElement): string => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none')

// Or
const toggle = (ele: HTMLElement): boolean => (ele.hidden = !ele.hidden)
```
