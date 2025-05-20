# Project Reorganization Effort
I want the projected to be organized in a different manner. I originally built it this way because

- [Requirements, Thoughts \& Concerns](#requirements-thoughts--concerns)
- [\[**`Proposal 1`**\] `src` directory](#proposal-1-src-directory)
- [\[**`Proposal 2`**\] Monorepo](#proposal-2-monorepo)

## Requirements, Thoughts & Concerns
**`tsconfig.json`**
I would like the `tsconfig.json` file to not be at the top-level of the project but rather stored elsewhere in the project under a `config/` directory. This isn't really important; it's an _idea_ that I like but it isn't important. I've gotten that to work with only a single issue. `VSCode` cannot handle the `tsconfig.json` being anywhere but the project root. So to do this I need to play with the project some.

- Move the `tsconfig.json` to `config/tsconfig.json`
- Create a pre-install script (`preinstall`) to
  - Write a `tsconfig.json` file to the root directory
  - It's contents should extend the one at the project root
- Make sure **THE ROOT** `tsconfig.json` is ignored in the `.gitignore` file.
- Change the paths so that they align correctly
  - Below is an example that I got working

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "skipLibCheck": true,
    "target": "ESNext",

    "noImplicitAny": true,
    "strict": true,

    // The relative to THIS FILE
    "baseUrl": "./",

    // These paths are based upon baseUrl
    "paths": {
      "@utils": [ "./utils/index.ts" ],
      "@utils/*": [ "./utils/*" ],
      "@collections": [ "./11ty/collections/index.ts" ],
      "@collections/*": [ "./11ty/collections/*" ],
      "@tplfns": [ "./11ty/template-funcs/index.ts" ],
      "@tplfns/*": [ "./11ty/template-funcs/*" ],
      "@events": [ "./11ty/events/index.ts" ],
      "@events/*": [ "./11ty/events/*" ],
      "@plugins": [ "./11ty/plugins/index.ts" ],
      "@plugins/*": [ "./11ty/plugins/*" ],
      "@templates": [ "./11ty/templates/index.ts" ],
      "@templates/*": [ "./11ty/templates/*" ],
      "@transforms": [ "./11ty/transforms/index.ts" ],
      "@transforms/*": [ "./11ty/transforms/*" ],
      "@variables": [ "./11ty/variables/index.ts" ],
      "@variables/*": [ "./11ty/variables/*" ],
      "@mytypes": [ "./types/index.ts" ],
      "@mytypes/*": [ "./types/*" ],
    },
  },

  // I'm pretty sure these may not be correct 🤷🏽‍♀️
  "include": [ "./**/*", "./contents/**/*" ],
  "exclude": [
    "node_modules",
    "_site",
    "cheatsheets"
  ]
}
```

## [**`Proposal 1`**] `src` directory
```
config
  build
    env.development
    env.production
  data
    snippets-categories.yml
    snippets-grouped.yml
    metadata.json
    socials.yml

  scripts
    dev
    production

  libs
    jest.yml
    prettier.yml
    tsconfig.json
    eslint.yml
    husky.yml

types
  modules.d.ts
  eleventy.ts
  categories.ts
  snippets.ts
  blog.ts
  projects.ts

src
  events

  utils

  collections
     blog
     projects
     snippets

  plugins
     callouts
     cards
     categories
     custom-props
     dynamic-content
     markdown
     page-nav
     search
     side-bar
     tags
     toc
     wikilinks

  template-functions
     filters
     shortcodes

  theme
     head
     layouts
     partials
     schemas
     styles
     webc

  transforms
     bundle-typescript
     html-output
     yaml

contents
  assets
  pages
  philosophy
  projects
  snippets
```

## [**`Proposal 2`**] Monorepo
Go full into a monorepo and everything is a package. This seems like the most fun for me but not something I wanna get into right now. It would make the organization of this project so much cleaner.

If anything this I would do for fun for later. This is far from important for now.

```
docs

app
  contents
  eleventy.config.ts

eleventy
  collections
  filters
  shortcodes
  plugins
  theme

website

tools
  linting
  runners
  utils

tsconfig.json
tsconfig.build.json
package.json
pnpm-workspace.yaml

```
