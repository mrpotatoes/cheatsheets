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

// TODO: Used in data.ts and this is completely wrong. Dummy.
export interface FuzzySearch {
  [key: string]: Base[]
}

/**
 * No but seriously isn't this great?
 */
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

export interface YamlObject<T> {
  [key: string]: T
}

export interface FuzzySearch2 {
  cat: string
  title: string
  url: string
  group: string
  crumbs2: string
  crumbs: any // DELETE ME
}

export interface Remapped {
  title: string
  catU: string
  group: string
  cat: string
  url: string
}

export interface FuzzySearchRemapped {
  [key: string]: Remapped[]
}
