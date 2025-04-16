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

export interface Base {
  title: string
  url: string
}

/**
 * TODO: Validate if this typing is correct. I feel that it is recursive.
 */
export interface CategoryTree {
  [key: string]: Meta[]
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
      [key: string]: GroupSnippet[]
    }
  }
}

export interface GroupSnippet extends Base {
  slug: string
}

export type Breadcrumb = Base

export interface Empty {
  groups: string[]
  snippets: {}
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

export interface Snippets {
  [key: string]: Base[]
}
