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
  [key: string]: Meta
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
      [key: string]: Snippet
    }
  }
}

export interface Empty {
  groups: string[]
  snippets: {}
}

export interface Snippet {
  title: string
  url: string
  slug: string
}

export interface GroupUrl {
  title: string
  url: string
  group: string
}

export interface BaseObject {
  title: string
  url: string
}

export interface GroupedUrls {
  [key: string]: GroupUrl[]
}

// TODO: Convert name to title
export interface Breadcrumb {
  title: string
  url: string
}

export interface CatSnippet {
  url: string
  fileSlug: string
  filePathStem: string
}
