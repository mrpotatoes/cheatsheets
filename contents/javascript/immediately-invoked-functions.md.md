---
layout: post.njk
title: Immediately Invoked Functions
category: JavaScript
---

An immediately invoked function automatically executes after it's read into the parser. The following snippet below would immediately show `'stuff'` to the console.

## `IIF`
```js
(function() {
  // Do stuff here
  console.log('stuff')
})()
```
