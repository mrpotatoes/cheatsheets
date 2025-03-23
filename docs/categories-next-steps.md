## Purpose
I want to change the way that I handle the snippets on my [cheatsheets](https://tech.libresinn.com/cheatsheets/) website. I want a more deeply nested structure to better organize my snippets.

## Thoughts
I think I might need to maintain a secondary script to manage a category path using `11ty.on('after')` or as a standalone script. I'll ask in Discord if there is a way to do this with the platform natively. If I have to maintain a separate JSON file I think I may handle it.

Lastly I need to make that this output will work produce an object that my fuzzy logic can understand and therefore search. 

After this I want to update this branch of 11ty to the newest version so I can use `import` and `export` statements.

Finally I need to rebuild the main and sub-pages to show them on-screen.

## Requirements
- Deeply nested folder structure
- Breadcrumbs for every snippet
  - All categories will have a display name
- Folders are categories and should have metadata associated with it
  - Name
  - Description
  - Images (header, icon etc)
  - Related
- Related content
  - Automatic or frontmatter config
- Notifications for
  - Empthy paths
- Empthy directories should display the configured content for that category
- Automatic keyword extraction
- Fuzzy search to find category & snippets
  - Search by category or snippets (2 objects or all together?)
  - Results
    - Show breadcrumbs.
      - Each item should link to it's parent category page
    - Show category or snippet text teaser in results 
    - Show sample related. limit to 3, linkable
    - Links to page

## Development
### Concerns
My current biggest concern is how to maintain the breadcrumbs (parent tree) in the `addCollection` function. That needs to be maintained for all.

I think the best option will be to make it a data file: `./config/11ty/data/categories.(json|yaml)`. I can use the `eleventyConfig.on('eleventy.after', event.after)` to save the categories that I generated in the `eleventyConfig.addCollection('categories')` function (both cat list & breadcrumbs). This proposal would allow me to leverage `11ty` to it's fullest.

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

### Data Structure
Still not sure yet.

```js
const snippet = {
  // To the category or snippet
  url: '/some/url'
  title: 'Snippet Title',
  teaser: '',

  // These should be in order. These are the categories
  breadcrumbs: [{ label: '', url: '', snippet: '', image: '' }],
  related: [{ tag: '', url: '' }],
}

const snippets = [snippet, snippet, snippet, ...]
```

<!-- Convert this flattened object into a tree to know parents and children

```js
const metadata = {
  parent: metadata,
  category: {
    key: '',
    label: '',
    description: '',
  }
}

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
7. [`mrpotatoes/11ty-starter-exploration`](https://github.com/mrpotatoes/11ty-starter-exploration/tree/main/__categories-test) -->
