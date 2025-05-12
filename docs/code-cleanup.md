# Code cleanup

- [General Code](#general-code)
  - [Utilities](#utilities)
  - [Configurations](#configurations)
- [Content](#content)
- [Code Quality](#code-quality)
- [Misc](#misc)
  - [New folder structure](#new-folder-structure)

## General Code
- [ ] Convert the virtual template code into plugins
- [ ] `config/utils/categories.ts`
  - [ ] Try to remove category from all function names
  - [ ] Change `flattenCategories` to `flattened`
  - [ ] Rename `transformCategories`
  - [ ] Change `breadcrums` so it uses a `.reduce` instead
  - [ ] Move `emptySnippet` to `@utils/data`
- [ ] Combine `filters` and `shortcodes`
  - [ ] Maybe even `transforms`

### Utilities
- [ ] `@utils/urls`
  - [ ] This should contain all URL processing
    - Because this would make more sense since most of this file is `dotenv()` or other configurations
- [ ] `config/utils/index.ts`
  - [ ] I want to use better `exports` here
- [ ] Maybe I'd like to change everything in the `@utils/variables` file to be a function

### Configurations
- [ ] `tsconfig.json`
  - [ ] Delete most aliases as I'm not using most of them
  - [ ] Attempt to change the path
- [ ] Change the site build path
- [ ] `package.json`
  - [ ] Maybe create some shell scripts to run some of the commands. They're getting a bit too long to maintain
  - [ ] Use the `UserConfig` type from `@11ty/eleventy`
- [ ] Find and replace all `code/tips` hardcoded stuff; put into env files pull from vars code
- [ ] Add proper debug handling
  - [ ] `DEBUG=?` -> `.env.*` files
  - [ ] ~~Properly convert to `boolean`~~
  - [ ] Throw error if data is incorrect
  - [ ] Add debug handling to correct code
- [ ] Add cache busting to css & js
  - [ ] [`Denperidge/eleventy-auto-cache-buster`](https://github.com/Denperidge/eleventy-auto-cache-buster)
  - [ ] [CSS workflow and cache busters in `11ty`](https://www.pupismyname.com/articles/11ty-css-and-cache-busters/)
  - [ ] [CSS Cache Busting in `Eleventy`](https://samdking.co.uk/blog/css-cache-busting-in-eleventy/)
  - [ ] [Cache busting in `Eleventy`](https://bnijenhuis.nl/notes/cache-busting-in-eleventy/)

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
- [ ] `config/types/categories.ts`
  - [ ] [MAYBE] rename to `snippets.ts`
- [ ] Ask about how to type the category correctly
- [ ] Finish typing the Eleventy types
- [ ] Add linting back in
  - [ ] Put configurations into the `./config/build` directories

## Misc
- [ ] Change repo name to `website`
- [ ] Change directory where code is deployed

### New folder structure
```
src
  11ty
    collections
    events
    transforms
      filter.*.ts
      plugin.*.ts
      shortcode.*.ts
    plugins
      virtual-templates
        category.root.ts
        category.children.ts
        groups.ts
  data
  layouts
  styles
  utils
    types
  build

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
