---
title: Reload the current page
group: Page Interactions
---

## JavaScript

```js
const reload = () => location.reload()

// Or
const reload = () => (location.href = location.href)
```

## TypeScript

```js
const reload = (): void => location.reload()

// Or
const reload = (): string => (location.href = location.href)
```
