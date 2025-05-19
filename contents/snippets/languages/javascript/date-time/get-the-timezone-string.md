---
title: Get the timezone string
---

## JavaScript
```js
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone
```

## TypeScript
```ts
const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone
```

## Example
```js
getTimezone() // 'Asia/Saigon'
```
