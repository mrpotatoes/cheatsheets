# Data Structure Thoughts
Just me rambling

## Example output
These are not the finalized properties. The schema will be fixed in the future.

```yaml
---
browser/:
  name: Browser
browser/css/:
  name: CSS
browser/html/:
  name: HTML
browser/html/hey/:
  name: HTML
browser/html/hey/there/:
  name: THERE
languages/:
  name: Languages
languages/javascript/:
  name: JavaScript
languages/javascript/arrays/:
  name: Arrays
languages/javascript/strings/:
  name: Strings
```

## Thoughts
Given the above I need to
- Create virtual templates
  - Generate the pages with their content
- Get breadcrumbs for any above category
- Use this for fuzzy search
  - Possibly generate a `.json` file that will be used for fuzzy search
  - When doing the filtering show related snippets under their category on the page
- Retrieve all snippets underneath each category
- Possibly set tags or categories in `frontmatter`

