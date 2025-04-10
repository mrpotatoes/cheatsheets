import * as data from './data.mjs'
import * as categories from './categories.mjs'
import * as vars from './variables.mjs'
import * as urls from './urls.mjs'

export default {
  vars: {
    DEBUG: process.env.DEBUG || false,
    passthroughs: vars.passthroughs,
    basePath: vars.basePath,
    targets: vars.targets,
    snippetBase: vars.snippetBase,
    urls: vars.urls,
  },

  urls: {
    snippet: (page) => `${vars.urls.sansTrailing}${page.filePathStem.replace('snippets/', '')}/`,
  },

  data: {
    yamlObject: data.yamlData,
    tree: data.tree,
    groups: data.groups,
    emptyObject: data.emptyObject,
  },

  strings: {
    trimSlashes: (str) => str.replace(/^\/+|\/+$/g, ''),
  },

  // I think it might be best to memoize most of these functions
  categories: {
    flattened: categories.flattenCategories,
    normalPath: categories.normalizedCategoryPath, // Normalize fn above
    crumbs: categories.breadcrumbs, // Breadcrumbs
    clear: data.emptyObject(categories.emptySnippet),
    addGroup: categories.addGroup,
    tree: data.tree,
    segmented: categories.segmented,
    catPath: categories.catPath,
    link: categories.catLink,
    tpl: categories.catTpl,

    list: () => {}, // Not sure yet
    paths: () => {}, // The category fn above
  },
}
