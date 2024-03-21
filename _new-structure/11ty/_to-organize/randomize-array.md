---
layout: post.njk
title: Randomize Array
category: Array
---

## Randomize Array

With Duplicates
```js
let arr = []
while (arr.length < 20) {
  let r = Math.floor(Math.random() * 20) + 1

  // Dupes allowed
  arr.push(r)
}
```

Sans Duplicates
```js
const randomize = () => {
  let arr = []
  while (arr.length < 20) {
    let r = Math.floor(Math.random() * 20) + 1
    
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }

    // No dupes
    arr.push(r)
  }
}
```