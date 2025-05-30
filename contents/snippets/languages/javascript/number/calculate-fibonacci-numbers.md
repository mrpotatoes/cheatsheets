---
title: Calculate Fibonacci numbers
---

## JavaScript
```js
const fibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)))
```

## TypeScript
```ts
const fibo = (n: number, memo: Record<string, number> = {}): number => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)))
```

## Examples
```js
fibo(1) // 1
fibo(2) // 1
fibo(3) // 2
fibo(4) // 3
fibo(5) // 5
fibo(6) // 8
```
