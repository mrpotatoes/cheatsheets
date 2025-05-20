# Code cleanup

- [Next Steps](#next-steps)
- [General Code](#general-code)
  - [Utilities](#utilities)
  - [Configurations](#configurations)
- [Content](#content)
- [Code Quality](#code-quality)
- [Misc](#misc)

{#
export const newPath = (page, filepath) =>
  path.join(
    process.env.PWD,
    page.inputPath.replace(`/${page.fileSlug}.md`, ''),
    filepath
  )
#}

## Next Steps
- [ ] Images, teasers, typings [`feature/images`]
- [ ] Errors & debugging [`feature/debugging`]
- [ ] Scripts [`feature/scripts`]
- [ ] Theme + Vento [`feature/theme`]
- [ ] Content refactor (add desc) [`refactor/content`]
- [ ] Folder redo [`epic/project-reorganization`]
  - `epic/refactor/src`
  - `epic/refactor/collections`
  - `epic/refactor/utils`
  - `epic/refactor/plugins`
  - `epic/refactor/theme`
  - `epic/refactor/transforms`
  - `epic/refactor/data`
  - `epic/refactor/types`
  - `epic/refactor/`
  - `epic/refactor/`

## General Code
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

## Code Quality
## Misc
- [ ] Use the `UserConfig` type from `@11ty/eleventy`
  - [ ] Finish typing the Eleventy types
- [ ] Ask about how to type the category correctly
- [ ] Add linting back in
  - [ ] Put configurations into the `./config/build` directories
- [ ] Change repo name to `website`
- [ ] Change directory where code is deployed

