---
title: Memoize a function
---

## JavaScript
```js
export const memoize = (fn) => {
  const cache = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache[key]) {
      return cache[key]
    }

    const result = fn.apply(this, args)
    cache[key] = result

    return result
  }
}
```

## Examples
```js
// Calculate Fibonacci numbers
const fibo = memoize((n) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)))

fibo(1) // 1
fibo(2) // 1
fibo(3) // 2
fibo(4) // 3
fibo(5) // 5
fibo(6) // 8
```

## Footnotes
1. Christensen, Nicky, [Memoization in JavaScript](https://nickychristensen.medium.com/memoization-in-javascript-53db416e0ee3) (2016)
