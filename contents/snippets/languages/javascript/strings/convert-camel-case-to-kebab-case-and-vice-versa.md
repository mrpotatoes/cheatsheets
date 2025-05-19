---
title: Convert camelCase to kebab-case and vice versa
group: Conversions
---

## JavaScript
```js
const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1])

// Or
const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
```

## Examples
```js
kebabToCamel('background-color') // 'backgroundColor'
camelToKebab('backgroundColor') // 'background-color'
```
