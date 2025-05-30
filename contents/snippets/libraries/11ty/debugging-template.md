---
title: Debugging a template in 11ty
---

## TODO
- [Tips for debugging in 11ty - griffa.dev](https://griffa.dev/posts/tips-for-debugging-in-11ty/)

Add the filter
```js
eleventyConfig.addFilter('debugger', (...args) => {
  console.log(...args)
  debugger;
})
```

In the template
```
{\{ collections.catTree[0].data.breadcrumbs | debugger }}
```
