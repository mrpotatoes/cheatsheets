---
title: Convert an uint8 array to a base64 encoded string
group: Conversions
---

## JavaScript
```js
const uint8ToBase64 = (arr) =>
  btoa(Array(arr.length)
    .fill('')
    .map((_, i) => String.fromCharCode(arr[i]))
    .join(''))

// For Node.js
const uint8ToBase64 = (arr) => Buffer.from(arr).toString('base64')
```

## TypeScript
```ts
const uint8ToBase64 = (arr: Uint8Array): string =>
  btoa(Array(arr.length)
    .fill('')
    .map((_, i) => String.fromCharCode(arr[i]))
    .join(''))

// For Node.js
const uint8ToBase64 = (arr: Uint8Array): string => Buffer.from(arr).toString('base64')
```

## See also
- [Convert a base64 encoded string to an uint8 array](/string/convert-a-base64-encoded-string-to-an-uint8-array)
