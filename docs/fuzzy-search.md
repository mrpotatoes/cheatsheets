# Fuzzy Search Thoughts

[**`NOTE`**]: I'll work on this after I get the categories stuff merged in to main and deployed to my website

1. I want to make sure the data structure will work with the fuzzy search.
2. I don't know if I want a dropdown search or to filter the entire page.
   1. I am not sure this is the option I want to take cuz i'll need to load all the snippets.
   2. That may be fine since the categories file will contain all snippets as a `JSON` file which i'll server via the browser.

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


Current Example
```html
<!doctype html>
<html lang="{{ metadata.language }}">
  <head>
    <script src="/assets/fuzzy.js"></script>
  </head>

  <body>
    <script type="javascript">
      <!-- https://www.fusejs.io/demo.html -->

        const fuse = new Fuse(snippets, {
          includeScore: true,
          // threshold: 0.12,
          keys: ['title', 'url']
        });

        const res = fuse.search('empty')

        <!-- for (const r in res) {
          console.log(res[r].item.title)
        } -->

        <!-- console.log(res.length) -->
    </script>
  </body>
</html>
```

`11ty` config
```js
/**
 * Create a snippet object for fuzzy search.
 *
 * Use a global object (outside of the collection) that I'll use to save a
 * JSON file in the after event.
 */
eleventyConfig.addCollection('fuzzysearch', (collectionApi) => {
  const cats = utils.categories.tree()
  const emptyFn = () => ([])
  const categories = utils.data.emptyObject(emptyFn)(utils.categories.flattened(cats))
  let snips = []

  // a .map would be better in the future
  collectionApi.getFilteredByTag('snippets').forEach(snippet => {
    snips.push({
      title: snippet.data.title,
      url: snippet.page.url,
      cat: utils.categories.normalPath(snippet),
      crumbs: [],
    })
  })

  return {}
})
```

Example `fuzzysearch.js` output
```js
const snippets = [{
  "title": "Cast a value as an array",
  "url": "/code/tips/languages/javascript/arrays/cast-a-value-as-an-array/",
  "cat": "languages/javascript/arrays/"
}, {
  "title": "Check if an array is empty",
  "url": "/code/tips/languages/javascript/arrays/check-if-an-array-is-empty/",
  "cat": "languages/javascript/arrays/"
}]
```

### UI Output
![example use](./example.gif)

```txt
maro
--------------------------------
20 matches in 2.4ms

- Super Mario 1
  - Games > Nintendo > SNES
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Related: tag 1, tag 2, tag 3
- Super Mario
  - Games > Nintendo > SNES
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Related: tag 1, tag 2, tag 3
- Mario Kart
  - Games > Nintendo > Switch > Super Mario 3
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Related: tag 1, tag 2, tag 3
- Mario Party 3
  - Games > Nintendo > WII > Super Mario 3
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Related: tag 1, tag 2, tag 3

(... further results)
```

## Links
- [leeoniya/uFuzzy: A tiny, efficient fuzzy search that doesn't suck](https://github.com/leeoniya/uFuzzy)
- [Nozbe/microfuzz: A tiny, simple, fast JS fuzzy search library](https://github.com/Nozbe/microfuzz)
- [Live Demo | Fuse.js](https://www.fusejs.io/demo.html)
- [QuickScore | A JavaScript string-scoring and fuzzy-matching library based on the Quicksilver algorithm](https://fwextensions.github.io/quick-score-demo/#demo)
- [farzher/fuzzysort: Fast SublimeText-like fuzzy search for JavaScript.](https://github.com/farzher/fuzzysort)
