---
title: Check if the touch events are supported
group: Predicates
---

## JavaScript
```js
const touchSupported = () =>
  'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)
```

## TypeScript
```js
const touchSupported = (): boolean =>
  'ontouchstart' in window || (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']
```
