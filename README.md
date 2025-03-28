# Tech Blog & Cheatsheets
I wanted something where I remember all the neat little code snippets I've created or find so I don't have to rewrite them in the future.

I will be rebuilding my website using the [`madrilene/eleventy-excellent`](https://github.com/madrilene/eleventy-excellent/) as a guiding template. Most likely forking it and modifying it. I will also be using [`rothsandro/eleventy-notes`](https://github.com/rothsandro/eleventy-notes)'s project as there is a lot of functionality therein that I want to use on my website.

## Features & Enhancements
- Website
  - Fix favicon
  - Pagination on the category pages
- Optional Features
  - Icon functionality set in `frontmatter`
  - Description for landing pages in frontmatter
- Description under the category name on the category page
  - https://tech.libresinn.com/cheatsheets/dotfiles/
  - Dotfiles
  - {{SOME DESCRIPTION}}
- Both blog & examples need to have a related section at the bottom
  - [Tags page](https://eleventy-notes.sandroroth.com/tags/)
  - [Callouts](https://eleventy-notes.sandroroth.com/n/writing/callouts/)
  - [Queries](https://eleventy-notes.sandroroth.com/n/writing/dynamic-content/queries/)
- Image management
  - Since I will also be using this website to house my blog I will want to handle images a little differently. To be researched.

## Directory reorganization
### Main
Once the [`feature/reorg`](https://github.com/mrpotatoes/cheatsheets/pull/3) pull request is merged I plan to further reorganize the folder structure. The root level structure will be thus
```
./
  .github/workflows/

  docs/
    - deployment.md
    - installation.md
    - ...

  assets/
    css/
    fonts/
    images/
    og-images/
    scripts/
    svg/

  includes/
    head/
    partials/
    schemas/
    webc/
  
  common/
    404.njk ...

  config/
    layouts/
    data/
    includes/
    scripts/
    11ty/
      events/
      filters/
      plugins/
      setup/
      shortcodes/
      utils/
        collections.js
        ignores.js
      eleventy.config.js
      prettier.config.js

  content/
    pages/
      about.njk (include resume)
      blog.njk
      index.njk
      legal.njk
      privacy.njk
      styleguide.njk

    cheatsheets/
      ## My cheatsheets because I wanna be dope as heck

    blog/
      ## Blog item's n' shit. All that good stuff yo
    
    philosophy/
      ## Still unsure about this
      ## Some stuff to talk about that comes with full examples

    projects
      ## Projects I'm actively working on or stuff that I find interesting
      ## Will include a ton of ramblings and half notes.

    index.njk
    robots.njk
    sitemap.njk

  .editorconfig
  .gitignore
  LICENSE
  README.md
  package*.json

```

### Nested Cheatsheets
I am changing how the cheatsheets are loaded and whatever in this website. I want the ability to 

```
├── browser
│  ├── css
│  ├── dom
│  └── html
├── javascript
│  ├── array
│  ├── date-time
│  ├── function
│  ├── functional-programming
│  ├── libraries
│  │  ├── express
│  │  └── jest
│  ├── math
│  ├── misc
│  ├── number
│  ├── object
│  ├── random
│  ├── recursion
│  ├── reduce
│  ├── string
│  ├── typescript
│  └── validator
├── robots.njk
├── sitemap.njk
├── sql
└── subsystem
  ├── bash
  └── dotfiles
```

## Useful Articles
- https://www.zachleat.com/about/
- https://eleventy-notes.sandroroth.com/
- https://www.aleksandrhovhannisyan.com/blog/custom-markdown-components-in-11ty/
- https://dev.to/psypher1/lets-learn-11ty-part-3-collections-shortcodes-macros-p0a
- https://v0-7-1.11ty.dev/docs/shortcodes/
- https://github.com/11ty/eleventy/discussions/2289
- https://www.11ty.dev/docs/plugins/render/#renderfile
- [Implementing categories • pborenstein.dev](https://pborenstein.dev/posts/categories/)
- [Featured Post Images](https://11ta.netlify.app/2020/09/06/featured-post-images/)
- [11ta/11ta-template](https://github.com/11ta/11ta-template)
  - I like the blog landing page theme

## Other
- [MarkdownIt plugins | Markdown It Plugins](https://mdit-plugins.github.io/)
- [markdown-it/docs/development.md](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md)
  - I might need to write a custom `markdown-it` plugin to move files to a central directory (elsewhere)
  - If I do this I wanna use an existing image plugin to _add_ features to
- [CSS Selectors Playground](https://selectors.sandroroth.com/)
- [`tinytip.co`](https://tinytip.co/)
  - [Cheatsheet example](https://tinytip.co/cheatsheets/nan/)
  - [Tips/Snippets example](https://tinytip.co/tips/regex-backreference/)
- [Blog](https://sandroroth.com/blog/)
  - [List example](https://sandroroth.com/blog/)
  - [Post example](https://sandroroth.com/blog/angular-library/)
- [Eleventy Walk Through - Partials and Include](https://rphunt.github.io/eleventy-walkthrough/partials-and-include.html#frontmatterpartials)
- [Eleventy Themes & Templates - Built At Lightspeed](https://www.builtatlightspeed.com/category/eleventy)
