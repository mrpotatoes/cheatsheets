# Categories
- [So far](#so-far)
- [Requirements](#requirements)
- [Data Structure](#data-structure)
- [What's Next](#whats-next)
- [Links](#links)

## So far
I've done so much so far. I have the category pages linking as expected tho.

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

## Data Structure
The category data structure is a `trie` with metadata and each node has the following schema.

```yaml
# ./__categories-test/cats.yml
browser:
  meta:
    name: Browser
    desc: Here is some description
  css:
    meta:
      name: CSS
      desc: Lorem ipsum dolor sit amet
  html:
    meta:
      name: HTML
      desc: Lorem ipsum dolor sit amet
    hey:
      meta:
        name: HTML
        desc: Lorem ipsum dolor sit amet
      there:
        meta:
          name: THERE
          desc: Lorem ipsum dolor sit amet
```

## What's Next
One thing I want to try before I do all this work within a virtual template is to.

**Most important**
- Abstract the breadcrumbs function so I can use it in more places
- Snippet documents
  - Clean up formatting to better suit me
  - Add groups to all snippets
- Convert to `TypeScript` to use [aliases](https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports/)
- Convert to [`noelforte/eleventy-plugin-vento`](https://github.com/noelforte/eleventy-plugin-vento)
  - Convert the [`htmlList.mjs`](../config/11ty/shortcodes/htmlList.mjs) into a partial
- Add snippet counts
  - To category tree PER category
  - To snippets page PER card/grouping
- Add a `weight` property to the category tree
  - Use this to sort
- ~~Get the `.mjs`~~ files to rerun on save
  - `TypeScript` might solve this problem

**Secondary**
- A `TODO.md` file that is added to the content stuff (`./contents/pages/todo.md`)
- Impliment fuzzy search
  - Decide on datastructure output
- Related content functionality

**Tertiary**
- Use [`@hotwired/turbo`](https://hotwired.dev/)
- Create a [schema](https://www.11ty.dev/docs/data-validate/) if possible for the categories data
- Add more functionality to the categories
  - Hero image

## Links
- [quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema?tab=readme-ov-file)
