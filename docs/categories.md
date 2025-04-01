# Categories
- [So far](#so-far)
- [Requirements](#requirements)
- [Data Structure](#data-structure)
- [What's Next](#whats-next)
- [Example Code](#example-code)
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

**Most important**
- Error handling
  - Folder no exist
  - Mapping no exist
- Categories should only show up when there is something underneath
- I need to get the URLs figured out
  - Perhaps a [global function](https://www.11ty.dev/docs/data-global-custom/#functions)
  - A variable that is set somewhere would also be helpful
- Functionality is all over the place, I need to cleanup my functions and data
- Get the `.mjs` files to rerun on save
- Change `./contents` directory structure
  - See [`website.md`](./website.md)
  - New urls for snippets
  - Remove all the `.json` data files
- Complete the `categories.yaml` file
- Decide on how to show snippets
  - Since snippets themselves are pretty small/short I wonder if ...
    - I should show multiple on a snippet page or something

**Secondary**
- Impliment fuzzy search
- Delete each data file under contents
  - Dynamically set the tags & categories
- On cat pages show
  - Metadata
  - Sub cats

**Tertiary**
- Add markdown parsing to the description
- Use hotwire
- Create a [schema](https://www.11ty.dev/docs/data-validate/) if possible for the categories data
- Move `config/11ty/data/` to `config/data/`
- Use `config.on('eleventy.before', events.categories)` to do error checking
  - For example making sure that directories exist on system
  - That [meta] properties are set

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
