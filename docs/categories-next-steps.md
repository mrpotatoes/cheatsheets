## Purpose
I want to change the way that I handle the snippets on my [cheatsheets](https://tech.libresinn.com/cheatsheets/) website. I want a more deeply nested structure to better organize my snippets.

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
### So far
Welp, I gave up trying to use a simple object of url keys for instant lookup and instead I am using `Lodash`'s `_.set()` function which is very straight forward. 

### TODO
1. Formalize the structure of the category tree
   1. Make sure that the `page` content object exists to properly render it
2. Set the layouts for contents directory
3. Render the tree. This will be tricky but it should be straight forward
4. Rename the `breadcrumbs.json` to `categories.json`
5. Save categories and articles list to a big ole object for fuzzy search
6. Rebuild the layouts since I'm not using the previous setup
7. Delete this file
8. Delete all the tmp stuff from the scripts directory.

## Links
- [reactjs - How to recursively render React components based on a deeply nested array? - Stack Overflow](https://stackoverflow.com/questions/70499223/how-to-recursively-render-react-components-based-on-a-deeply-nested-array)
- [Master the Magic of Recursive Components in React | Medium](https://medium.com/@sdmahfuz/recursive-components-in-react-a-tutorial-d5705e26229f)

