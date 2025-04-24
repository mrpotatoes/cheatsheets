## Repo
- [ ] Change name to `website`

## Code Cleanup
- [ ] `config/utils/categories.ts`
  - [ ] Try to remove category from all function names
  - [ ] Change `flattenCategories` to `flattened`
  - [ ] Rename `transformCategories`
  - [ ] Change `breadcrums` so it uses a `.reduce` instead
  - [ ] Move `emptySnippet` to `@utils/data`
- [ ] `config/11ty/eleventy.config.ts`
  - [ ] Add urls to the `.env` files
  - [ ] Rename `.env-local` to `.env.development`
  - [ ] Rename `.env` to `.env.production`
  - [ ] Create a new utility file to get environment variables
- [ ] `package.json`
  - [ ] Maybe create some shell scripts to run some of the commands. They're getting a bit too long to maintain
  - [ ] Use the `UserConfig` type from `@11ty/eleventy`
- [ ] Split up the template functions
- [ ] Rename all snippet stuff
- [ ] `config/11ty/collections/*`
  - [ ] All snippet related collections should be renamed to `snippets.COLLECTION_NAME.ts`
  - [ ] `groupData` -> ``
  - [ ] `snippetsGrouped` -> ``
  - [ ] `snippets` -> ``
  - [ ] `config/11ty/collections/related-snippets.ts`
    - [ ] Delete me
- [ ] `config/data/*`
  - [ ] `config/data/groups.yml` -> `config/data/snippets-grouped.yml`
  - [ ] `config/data/categories.yml` -> `config/data/snippets-categories.yml`
- [ ] `config/11ty/plugins/bundle-typescript.ts`
  - [ ] Remove dead code
  - [ ] Narrow down the `ts` to be compiled
- [ ] `config/11ty/filters/*`
  - [ ] Rename them all
  - [ ] Some need fixes
- [ ] Add proper debug handling
  - [ ] `DEBUG=?` -> `.env.*` files
  - [ ] Properly convert to `boolean`
  - [ ] Throw error if data is incorrect
  - [ ] Add debug handling to correct code
- [ ] `config/utils/index.ts`
  - [ ] I want to use better `exports` here
- [ ] `config/11ty/shortcodes/*`
  - [ ] Delete: `snippetLinks.ts`
  - [ ] Delete: `snippet-counts.ts`
- [ ] `config/layouts/*`
  - [ ] These need better names because as-is they are confusing to follow
- [ ] Convert the virtual template code into plugins
- [ ] `config/11ty/transforms/minify.ts`
  - [ ] Fix so that the code actually does something (on build)
  - [ ] Document EVERYTHING
- [ ] Maybe I'd like to change everything in the `@utils/variables` file to be a function
- [ ] Configure tests
- [ ] `config/types/categories.ts`
  - [ ] [MAYBE] rename to `snippets.ts`
- [ ] `/assets`
  - [ ] I think I want this structure to resemble
    - [ ] `/assets/img/`
    - [ ] `/assets/js/`
    - [ ] `/assets/css/`
- [ ] `@utils/urls`
  - [ ] This should contain all URL processing
- [ ] Clean up `tsconfig.json`
  - [ ] Delete most aliases as I'm not using most of them
- [ ] Change the `@utils/variables/*` alias to `@utils/vars`
- [ ] Change the site build path
  - [ ] And make configuraboe
- [ ] `@config/scripts`
  - [ ] Delete
  - [ ] Remove references to it in `package.json`
- [ ] `@*/index`
  - [ ] Remove the `/index` part
- [ ] `config/11ty/eleventy.config.ts`
  - [ ] Fix the docs here since most of them are example comments
- [ ] `tsconfig.json`
  - [ ] [Custom `tsconfig.json` path](https://tsx.is/typescript#custom-tsconfig-json-path)
  - [ ] Move to `config/build`
- [ ] `contents/assets/fuzzy.ts`
  - [ ] There is repitition here I can change
  - [ ] Move functions to their own import (in `@utils`)
  - [ ] Refactor `filteredResults()`. Change the next code to a function
  - [ ] Inline the config default value so I can do an implicit return
  - [ ] Build elements using JSON and not strings
- [ ] `config/utils/variables.ts`
  - [ ] Rename to `configs.ts`
    - Because this would make more sense since most of this file is `dotenv()` or other configurations
- [ ] Apply `eleventyExcludeFromCollections`
  - [ ] assets?

## Typings
- [ ] Ask about how to type the category correctly
- [ ] Finish typing the eleventy types

## New folder structure
```
src
  11ty
    collections
    events
    transforms
    plugins
      virtual-templates
        categories.ts
        groups.ts
    templates
      filters
      plugins
      shortcodes
  data
  layouts
  styles
  utils
    types
  build

tests
  11ty
  data
  layouts
  styles
  types
  utils

contents
  assets
  templates
  philosophies
    blog
    explorations
  pages
  projects
  snippets

docs
```
