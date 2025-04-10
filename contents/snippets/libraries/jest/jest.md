---
title: Jest snippets (break up please)
---

## `beforeAll()`
```js
describe('Lorem ipsum dolor sit amet', () => {
  let someVariable = null
  
  beforeEach(() => {
    someVariable = 'new data ya?'
  })

  afterEach(() => {
    someVariable = null
  })
})
```
