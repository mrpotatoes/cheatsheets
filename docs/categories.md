# Categories
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

<!-- I'm not sure exactly how I want to handle the structure yet -->

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
- Delete each data file under contents
- New urls for snippets
- Move snippet documents to a specific directory
- Create a category related files
  - Page template
  - Layout template
  - New categories collection
- Create a [schema](https://www.11ty.dev/docs/data-validate/) if possible for the categories data
- Change the site's index page to render ALL the categories as links
- Error handling
  - Folder no exist
  - Mapping no exist
- Breadcrumbs
  - Must have links
  - May not contain empty stuff
  - Top level (not home) should say "Snippets"
- Sub trees [maybe, dunno yet]
  - Only render sub trees on specific category pages
- On main cat page
  - Show all immediate categories (depth 1)
    - Except when searching
  - Each category may show up to 10 snippets
- On cat pages show
  - Metadata
  - Sub cats

## Example Code
Passing the sample data structure above to the function

```js
const yaml = require('js-yaml')
const fs = require('fs')
const doc = yaml.load(fs.readFileSync('./cats.yml', 'utf8'))

/**
 * https://www.30secondsofcode.org/js/s/flatten-unflatten-object/
 */
const flattenObject = (obj, delimiter = '.', prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : ''
    const isObject = typeof obj[key] === 'object'
    const notEmpty = obj[key] !== null
    const isLength = Object.keys(obj[key]).length > 0
    const isMeta = key === 'meta'

    if (isMeta) {
      acc[pre] = obj[key]
    } else if (isObject && notEmpty && isLength) {
      Object.assign(acc, flattenObject(obj[key], delimiter, pre + key))
    }

    return acc
  }, {})

console.log(flattenObject(doc, '/'))
```

Should result in the following
```yaml
---
browser/:
  name: Browser
  desc: Here is some description
browser/css/:
  name: CSS
  desc: Lorem ipsum dolor sit amet
browser/html/:
  name: HTML
  desc: Lorem ipsum dolor sit amet
browser/html/hey/:
  name: HTML
  desc: Lorem ipsum dolor sit amet
browser/html/hey/there/:
  name: THERE
  desc: Lorem ipsum dolor sit amet
languages/:
  name: Languages
  desc: Lorem ipsum dolor sit amet
languages/javascript/:
  name: JavaScript
  desc: Lorem ipsum dolor sit amet
languages/javascript/arrays/:
  name: Arrays
  desc: Lorem ipsum dolor sit amet
languages/javascript/strings/:
  name: Strings
  desc: Lorem ipsum dolor sit amet
```

## Links
- [quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema?tab=readme-ov-file)
