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
- Searching
  - [TreeView with Search Bar](https://js.devexpress.com/jQuery/Demos/WidgetsGallery/Demo/TreeView/TreeViewWithSearchBar/MaterialBlueLight/)
  - [Searching TreeViews](https://developer.mescius.com/wijmo/demos/Nav/TreeView/Searching/purejs)
  - [TreeView with Search Bar](https://codepen.io/husin/pen/MPEjMK)
  - [Yn96ju (forked) - StackBlitz](https://stackblitz.com/run?file=index.js)
  - [package.json — nodebox — CodeSandbox](https://codesandbox.io/p/sandbox/mystifying-brown-bleztc?file=%2Fpackage.json)
  - [Demo - Searching TreeViews - JSFiddle - Code Playground](https://jsfiddle.net/Wijmo5/ff81c4u0/)
  - [index.js — nodebox — CodeSandbox](https://codesandbox.io/p/sandbox/modified-tree-final-forked-op1x0k?file=%2Fsrc%2Findex.js%3A10%2C29)
  - [Create Searchable nested TreeView in Vanilla Javascript - YouTube](https://www.youtube.com/watch?v=-T_oryzmD40)
  - [front-end-components/tree-view/src/v3\_search at main · StepanNaryshkov/front-end-components](https://github.com/StepanNaryshkov/front-end-components/tree/main/tree-view/src/v3_search)
  - [javascript - How to find search path of node in tree js/ts - Stack Overflow](https://stackoverflow.com/questions/56950600/how-to-find-search-path-of-node-in-tree-js-ts)
  - [How to Find a Path Through a Tree With JavaScript - James H. Edwards](https://incrediblesound.github.io/blog/2014/07/27/how-to-find-a-path-through-a-tree-with-javascript/)
  - [javascript - How to get A Path from a nested object tree - Stack Overflow](https://stackoverflow.com/questions/70635605/how-to-get-a-path-from-a-nested-object-tree)
  - [javascript - List all possible paths using lodash - Stack Overflow](https://stackoverflow.com/questions/36128171/list-all-possible-paths-using-lodash)
  - [Find path in a JS object? My favorite question to ask in a Frontend interview. | by Srijan Gulati | Medium](https://srijansinghgulati.medium.com/find-path-in-a-js-object-my-favorite-question-to-ask-in-a-frontend-interview-faab189e2c19)
  - [javascript - Get array of all Lodash paths of object - Stack Overflow](https://stackoverflow.com/questions/55700754/get-array-of-all-lodash-paths-of-object)
  - [Find a full object path to a given value with JavaScript - Stack Overflow](https://stackoverflow.com/questions/53543303/find-a-full-object-path-to-a-given-value-with-javascript)
  - [find-object-paths - npm](https://www.npmjs.com/package/find-object-paths)
  - ⭐️ [Find all paths of value in a JavaScript object](https://lowrey.me/find-all-paths-of-value-in-a-javascript-object/)
  - [JavaScript Find Path of Key in Deeply Nested Object or Array - TecHighness](https://www.techighness.com/post/javascript-find-key-path-in-deeply-nested-object-or-array/)
  
  
