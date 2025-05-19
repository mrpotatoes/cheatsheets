---
title: Closures
group: Functions
---

## JavaScript
```js
function myCounter() {
  let counter = 0

  return function() {
    counter++
    return counter
  }
}

const add = myCounter()

add()
add()
add()
```

[JavaScript Function Closures](https://www.w3schools.com/js/js_function_closures.asp)
