# Categories
- [Requirements](#requirements)
- [Data Structure](#data-structure)
- [What's Next](#whats-next)
- [Links](#links)

## Requirements
- [x] Deeply nested folder structure
- [x] Breadcrumbs for every snippet
  - [x] All categories will have a display name
- [ ] Folders are categories and should have metadata associated with it
  - [x] Name
  - [x] Description
  - [ ] Images (header, icon etc)
- [ ] Related content
  - [ ] Automatic or frontmatter config
- [x] Notifications for
  - [x] Empthy paths
- [x] Empthy directories should display the configured content for that category
- [ ] Fuzzy search to find category & snippets
  - [ ] Search by category or snippets (2 objects or all together?)
  - [ ] Results
    - [ ] Show breadcrumbs.
      - [ ] Each item should link to it's parent category page
    - [ ] Show category or snippet text teaser in results
    - [ ] Show sample related. limit to 3, linkable
    - [ ] Links to page

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
**Priority**

**Secondary**
- A `TODO.md` file that is added to the content stuff (`./contents/pages/todo.md`)
- Impliment fuzzy search
  - Decide on datastructure output
  - Save to the data directory
- Convert to [`noelforte/eleventy-plugin-vento`](https://github.com/noelforte/eleventy-plugin-vento)
  - Convert the [`htmlList.mjs`](../config/11ty/shortcodes/htmlList.mjs) into a partial
    - Might need to use `vento`'s [`{{ include}}`](https://vento.js.org/syntax/include/) functionality
- Add snippet counts
  - To category tree PER category
  - To snippets page PER card/grouping
- Allow for ordering for categories & snippets (`weight` property)

**Tertiary**
- Related content functionality
- Use [`@hotwired/turbo`](https://hotwired.dev/)
- Create a [schema](https://www.11ty.dev/docs/data-validate/) if possible for the categories data
- Snippet documents
  - Clean up formatting to better suit me
  - Add groups to all snippets
- Convert to `TypeScript` to use [aliases](https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports/)

## Links
- [quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema?tab=readme-ov-file)
