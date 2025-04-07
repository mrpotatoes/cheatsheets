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
One thing I want to try before I do all this work within a virtual template is to

**Most important**
- Get the `.mjs` files to rerun on save
- `./contents/snippets/*` directory
  - Add `group` to all snippet docs

**Secondary**
- Decide on how to show snippets
  - Since snippets themselves are pretty small/short I wonder if ...
    - I should show multiple on a snippet page or something
- Impliment fuzzy search
  - Decide on datastructure output

**Tertiary**
- Use hotwire
- Create a [schema](https://www.11ty.dev/docs/data-validate/) if possible for the categories data
- Add more functionality to the categories
  - Hero image
  - Markdown parsing to description
- [OPTIONAL] Convert to `TypeScript` to use [aliases](https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports/)

## Links
- [quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema?tab=readme-ov-file)
