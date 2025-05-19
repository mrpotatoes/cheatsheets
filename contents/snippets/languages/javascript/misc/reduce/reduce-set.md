---
title: Reduce + Set
---

This is silly but I had some code that I was annoyed and wasn't able to get to work as I would have liked. I wanted to minimize the amount of lines in the code and this is what I came up with.

```js
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

const builder = (edges) => {
  let graph = {}

  for (let edge of edges) {
    const [ a, b ] = edge

    const newGraph = {
      ...graph,
      [a]: [ ...((!(a in graph)) ? new Set(b) : new Set([...graph[a], b]))],
      [b]: [...((!(b in graph)) ? new Set(a) : new Set([...graph[b], a]))],
    }

    graph = newGraph
  }

  return graph
}

const graph = builder(edges)
```
