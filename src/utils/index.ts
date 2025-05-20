import * as data from '@utils/data'
import * as categories from '@utils/categories'
import * as vars from '@utils/variables'

export default {
  vars: {
    passthroughs: vars.passthroughs,
    basePath: vars.basePath(),
    targets: vars.targets,
    dotenv: vars.dotenvConfig,
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
    flattened: categories.flattened,
    normalPath: categories.normalizedPath, // Normalize fn above
    crumbs: categories.breadcrumbs, // Breadcrumbs
    clear: data.emptyObject(data.emptySnippet),
    addGroup: categories.addGroup,
    tree: data.tree,
    segmented: categories.segmented,
    link: categories.catLink,
    tpl: categories.catTpl,

    list: () => { }, // Not sure yet
    paths: () => { }, // The category fn above
  },
}
