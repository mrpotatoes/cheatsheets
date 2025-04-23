# Categories
- [Requirements](#requirements)
- [Data Structure](#data-structure)

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
