---
title: Options for handling exceptions
---

## Callback
Useful for when the function itself doesn't produce the error i.e. `TypeError`

```js
describe('Describe this block', () => {
  it('expect().toThrow(/error text/)', () => {
    expect(() => { fnThrow(null) }).toThrow('some substring')
  })
})
```
