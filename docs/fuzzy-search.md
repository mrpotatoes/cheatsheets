# Fuzzy Search Thoughts
```js
const snippet = {
  // I think these are self explanatory.
  path: '/some/url'
  title: 'Snippet Title',
  teaser: '',
  image: '',

  // In order, not sure if this should be an object or a plain string
  // Will this be clickable?
  breadcrumbs: [{ label: '', url: '' }],
  
  related: [{ tag: '', url: '' }],
}

// For the fuzzy search
const categories = [snippet, snippet, snippet]
```

## Links
- [leeoniya/uFuzzy: A tiny, efficient fuzzy search that doesn't suck](https://github.com/leeoniya/uFuzzy)
- [Nozbe/microfuzz: A tiny, simple, fast JS fuzzy search library](https://github.com/Nozbe/microfuzz)
- [Live Demo | Fuse.js](https://www.fusejs.io/demo.html)
- [QuickScore | A JavaScript string-scoring and fuzzy-matching library based on the Quicksilver algorithm](https://fwextensions.github.io/quick-score-demo/#demo)
- [farzher/fuzzysort: Fast SublimeText-like fuzzy search for JavaScript.](https://github.com/farzher/fuzzysort)
