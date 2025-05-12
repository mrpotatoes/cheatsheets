# Code cleanup

- [General Code](#general-code)
  - [Utilities](#utilities)
  - [Configurations](#configurations)
- [Content](#content)
- [Code Quality](#code-quality)
- [Misc](#misc)
  - [New folder structure ideas](#new-folder-structure-ideas)

## General Code
- [ ] Combine `filters` and `shortcodes`
  - [ ] Rename the folder to `template-functions`
- [ ] Move `config/assets` to `contents/assets`
- [ ] `bundle-typescript.ts`
  - [ ] Move to `transforms`
  - [ ] Rename to `browser-typescript.ts`

### Utilities
- [ ] `@utils/urls`
  - [x] `snippetSansTrailing()`
  - [ ] `absolute()`
- [ ] `config/utils/index.ts`
  - [ ] Lots of cleanup needed

### Configurations
- [ ] Change the site build path
- [ ] Add proper debug handling
  - [ ] `DEBUG=?` -> `.env.*` files
  - [ ] Throw error if data is incorrect

## Content
- [ ] `/assets`
  - [ ] I think I want this structure to resemble
    - [ ] `/assets/img/`
    - [ ] `/assets/js/`
    - [ ] `/assets/css/`
- [ ] Remove full stops from all single line comments
- [ ] Reformat all snippets
- [ ] Add proper headings to all snippets

## Code Quality
## Misc
- [ ] Use the `UserConfig` type from `@11ty/eleventy`
  - [ ] Finish typing the Eleventy types
- [ ] Ask about how to type the category correctly
- [ ] Add linting back in
  - [ ] Put configurations into the `./config/build` directories
- [ ] Change repo name to `website`
- [ ] Change directory where code is deployed

### New folder structure ideas
```
src
  11ty
    collections
    events
    templates
      filter.*.ts
      shortcode.*.ts
    transforms
      minify.ts
      yaml.ts
      cache-busting.ts
    plugins
      virtual-templates
        category.root.ts
        category.children.ts
        groups.ts
      markdown
      typescript

  theme (i.e., layouts)
    layouts
    styles
    images
    partials
    schemas
    webc
    head

  utils
    types.{NAME}.ts
    variables.ts
    categories.ts
    ...

  build

  data

tests?
  11ty
  data
  layouts
  styles
  types
  utils

contents
  assets
  philosophies
    blog
    explorations
  pages
  projects
  snippets

docs
```
