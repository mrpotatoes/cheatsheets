---
title: Check if user scrolls to the bottom of the page
group: Predicates
---

## JavaScript
```js
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight
```

## TypeScript
```js
const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight
```
