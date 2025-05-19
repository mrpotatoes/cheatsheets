---
title: Generate a random hex color
---

## JavaScript
```js
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

// Or
const randomColor = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`
```

## TypeScript
```ts
const randomColor = (): string => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

// Or
const randomColor = (): string => `#${(~~(Math.random() * (1 << 24))).toString(16)}`
```
