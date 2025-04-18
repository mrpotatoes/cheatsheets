# Tech Blog & Cheatsheets
I wanted something where I remember all the neat little code snippets I've created or find so I don't have to rewrite them in the future.

I will be rebuilding my website using the [`madrilene/eleventy-excellent`](https://github.com/madrilene/eleventy-excellent/) as a guiding template. Most likely forking it and modifying it. I will also be using [`rothsandro/eleventy-notes`](https://github.com/rothsandro/eleventy-notes)'s project as there is a lot of functionality therein that I want to use on my website.

### Enhancements
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
- Feature branches
  - `feature/fuzzy-search`
  - `feature/vento`
  - `feature/hotwire`
  - `feature/theme`
  - `feature/mdit-plugins`
  - `feature/custom-modules`
  - `feature/refactor-content`
  - `feature/refactor-typings`
  - `feature/creation-scripts`
    - Write in `.ts`
    - Create path aliases if needed/desired
  - [`azat-io/todoctor`](https://github.com/azat-io/todoctor)
    - A better and nicer looking todo reporter. Example command: `todoctor -o .reports`
- Check out [`@code-blocks`](https://code-blocks.surge.sh/)
- Interate [`MarkdownIt`](https://mdit-plugins.github.io/) plugins for lots more functionality
- Create a `/changelog` page
  - Should automatically update
- Create a page that pulls in this projects `README`
  - Could go best under `/changelog`
- [`pgilad/leasot` - GitHub Actions example](https://github.com/pgilad/leasot/issues/340)
- A better `yaml` loader & conversion (object literal → `YAML`)
  - [`eemeli/yaml`](https://github.com/eemeli/yaml)
- [OPTIONAL] Create new directory called `website`/`site`/`public`
  - Images folder
  - `assets` & `styles` folders

## Links
### Useful Articles
- https://eleventy-notes.sandroroth.com/
- https://www.aleksandrhovhannisyan.com/blog/custom-markdown-components-in-11ty/
- https://dev.to/psypher1/lets-learn-11ty-part-3-collections-shortcodes-macros-p0a
- https://www.11ty.dev/docs/plugins/render/#renderfile
- [Featured Post Images](https://11ta.netlify.app/2020/09/06/featured-post-images/)

### Other
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
- [Eleventy Themes & Templates - Built At Lightspeed](https://www.builtatlightspeed.com/category/eleventy)


Figure out why 'Generate a random hex color' isn't showing up. Might be others.
