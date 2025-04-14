/**
 * Types to consider
 *  - 11ty
 *  - Categories
 *    - Default category tree
 *    - Flattened
 *    - Flattened & Empty
 *    - Grouped
 */
export interface Meta {
  name: string
  desc: string
  weight?: number
}

/**
 * TODO: I think it will make more sense to change the category schema
 */
export interface Core {
  // [key: string]: Meta | Core // hmmmm
  [key: string]: Meta | Core
}

export interface Flattened {
  [key: string]: Meta
}

export interface Grouped {
  [key: string]: Group
}

export interface Group {
  [key: string]: {
    groups: string[]
    snippets: {
      [key: string]: Snippet[]
    }
  }
}

export interface Base {
  title: string
  url: string
}

export type Breadcrumb = Base

export interface Empty {
  groups: string[]
  snippets: {}
}

export interface Snippet extends Base {
  slug: string
}

export interface GroupUrl extends Base {
  group: string
}

export interface GroupedUrls {
  [key: string]: GroupUrl[]
}

export interface CatSnippet {
  url: string
  fileSlug: string
  filePathStem: string
}
