import * as data from './data.mjs'
import * as categories from './categories.mjs'

export default {
  env: {
    DEBUG: process.env.DEBUG || false,
  },

  data: {
    yamlObject: data.yamlData,
    tree: data.tree,
    emptyObject: data.emptyObject,
  },

  files: {
    data: () => {},
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
    
    list: () => {}, // Not sure yet
    paths: () => {}, // The category fn above
  },
}
