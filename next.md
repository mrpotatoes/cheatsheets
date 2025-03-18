## What
Convert this flattened object into a tree to know parents and children

```js 
const content = {
  '/languages/javascript/array/group-an-array-of-objects-by-a-key/': { metadata },
  '/languages/javascript/array/intersperse-element-between-elements/': { metadata },
  '/languages/javascript/array/partition-an-array-based-on-a-condition/': { metadata },
  '/languages/javascript/array/merge-two-arrays/': { metadata },
  '/languages/javascript/array/remove-duplicate-values-in-an-array/': { metadata },
  '/languages/javascript/array/repeat-an-array/': { metadata },
  '/languages/javascript/array/shuffle-an-array/': { metadata },
  '/languages/javascript/array/remove-falsy-values-from-array/': { metadata },
  '/languages/javascript/array/sort-an-array-of-items-by-given-key/': { metadata },
  '/languages/javascript/array/sort-an-array-of-numbers/': { metadata },
  '/languages/javascript/array/split-an-array-into-chunks/': { metadata },
  '/languages/javascript/array/swap-the-rows-and-columns-of-a-matrix/': { metadata },
  '/languages/javascript/array/swap-two-array-items/': { metadata },
  '/languages/javascript/array/unzip-an-array-of-arrays/': { metadata },
  '/languages/javascript/array/zip-multiple-arrays/': { metadata },
  '/sql/backing-up/': { metadata },
}
```

Converted to
```js
const navigationTree = {
  'languages': {
    'javascript': {
      'array': {
        'group-an-array-of-objects-by-a-key': metadata,
        'merge-two-arrays': metadata,
        // ... and so on
      },
    }
  }  
}
```

Lastly, on `eleventy.after` cache the tree to a file

```js
eleventyConfig.on('eleventy.after', () => {
  execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
})
```

## Also
When generating either object I want to make sure that I store the metadata I need for easy access
1. URL
2. Tags
3. Categry info
4. If only directories within a path that means it's an index
5. Breadcrumbs
6. Related content
