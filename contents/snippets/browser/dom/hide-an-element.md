---
title: Hide an element
group: Page Interactions
---

## JavaScript
```js
// Pick the method that is suitable for your use case
const hide = (ele) => (ele.style.display = 'none')

// Or
const hide = (ele) => (ele.style.visibility = 'hidden')

// Or
const hide = (ele) => (ele.hidden = true)
```

## TypeScript
```js
const hide = (ele: HTMLElement): string => (ele.style.display = 'none')

// Or
const hide = (ele: HTMLElement): string => (ele.style.visibility = 'hidden')

// Or
const hide = (ele: HTMLElement): boolean => (ele.hidden = true)
```
