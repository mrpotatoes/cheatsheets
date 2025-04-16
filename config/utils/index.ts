import * as data from '@utils/data'
import * as categories from '@utils/categories'
import * as vars from '@utils/variables'
import { EleventyPage } from '@mytypes/11ty'

export default {
  vars: {
    DEBUG: process.env.DEBUG || false,
    passthroughs: vars.passthroughs,
    basePath: vars.basePath,
    targets: vars.targets,
    snippetBase: vars.urls.category,
    urls: vars.urls,
  },

  urls: {
    snippet: (page: EleventyPage) => `${vars.urls.sansTrailing}${page.filePathStem.replace('snippets/', '')}/`,
  },

  data: {
    yamlObject: data.yamlData,
    tree: data.tree,
    groups: data.groups,
    emptyObject: data.emptyObject,
  },

  strings: {
    trimSlashes: (str: string): string => str.replace(/^\/+|\/+$/g, ''),
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

    list: () => { }, // Not sure yet
    paths: () => { }, // The category fn above
  },
}
