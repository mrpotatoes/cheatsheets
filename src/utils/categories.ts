import _ from 'lodash'
import * as errors from '@utils/errors'
import { groups } from '@utils/data'
import { Breadcrumb, CategoryTree, Flattened, Group } from '@mytypes/categories'
import { CollectionItem, CollectionItemPicked } from '@mytypes/11ty'
import { snippetBase } from '@utils/variables'

// @ts-ignore
export const hasCategory = (acc, curr) => acc[catGroupUrl(curr)] === undefined

/**
 *
 * @param curr
 * @returns
 */
export const catGroupUrl = (curr: CollectionItem) =>
  normalizedPath(curr) + group(curr)

/**
 *
 * @param snip
 * @returns
 */
export const group = (snip: CollectionItem) => (snip.data.group || 'other').toLowerCase()

/**
 * TODO: Move this function to elsewhere.
 *
 * @param updated
 * @returns
 */
export const isSameGroup = (updated: any): boolean => _.isEqual(updated, groups())

/**
 * Get a unique category link
 *
 * @param {*} id
 * @returns
 */
export const catLink = (id: string): string => (`${snippetBase()}${id}/`)

/**
 * Get a unique sub-category template
 *
 * @param {*} id
 * @returns
 */
export const catTpl = (id: string): string => (`sub-category/${id}.vto`)

/**
 * Get a path segmented into parts
 *
 * @param {*} str
 * @returns An array of path parts
 */
export const segmented = (str: string, full: boolean): string[] => {
  const trimmed = str.replace(/^\/+|\/+$/g, '').split('/')
  const length = full ? trimmed.length : trimmed.length - 1
  const paths = trimmed.slice(0, length)

  return paths
}

/**
 * Build an array of breadcrumbs for a given path
 *
 * TODO: Since the flattened array would be memoized I should remove the
 *  function parameter as it wouldn't be needed
 *
 * @param categories
 * @param path
 * @param full
 * @returns
 */
export const breadcrumbs = (categories: Flattened, path: string, full = false): Breadcrumb[] => {
  const split = segmented(path, full)
  const crumbs = [{ title: 'Snippets', url: snippetBase() }]
  let acc = ''

  // TODO: Convert to a different type of iterator (reducer?)
  for (let i = 0; i < split.length; i++) {
    const e = split[i]
    acc = `${acc}${e}/`

    crumbs.push({
      title: categories[acc].name,
      url: snippetBase() + acc,
    })
  }

  return crumbs
}

/**
 * The last item in a cat aggregrate.
 *
 * NOTE: Only use with categoryPath()
 *
 * @param acc
 * @returns
 */
export const basePath = (acc: string[]): string => _.last(acc) || ''

/**
 * Get a human readable category path
 *
 * It's a simple process
 *  - Build an array of paths to query the category tree
 *  - Pull out the pretty names
 *  - Finally put them all together into a nice string
 *
 * @param categories
 * @param path
 * @param full
 */
export const categoryPath = (categories: Flattened, path: string, full = false): string =>
  segmented(path, full)
    .reduce((acc: string[], curr: string): string[] => ([...acc, `${basePath(acc)}${curr}/`]), [])
    .map((e: string) => categories[e].name)
    .join(' > ')

/**
 * Normalize a category path
 *
 * @param {*} snip
 * @returns
 */
export const normalizedPath = (snip: CollectionItem | CollectionItemPicked): string => {
  const slug = snip.page.fileSlug
  const url = snip.page.url
  const cat = url.replace(snippetBase(), '').replace(slug + '/', '')

  return cat
}

/**
 * Add a snippet to specified group.
 *
 * TODO: I don't understand why checking if properties exist set them manually
 *  in the calling function 🤷🏽‍♀️. Perhaps the shape coming in doesn't match what
 *  I'm building here. I'll figure this out when I convert to TypeScript.
 *
 * @param {*} snippet
 * @param {*} categories
 * @param {*} group
 * @returns
 */
export const addGroup = (snippet: CollectionItem, categories: Group, group = 'Other'): Group => {
  const cats = _.cloneDeep(categories)
  const normalized = normalizedPath(snippet)

  // TODO: Make this part of the error messaging.
  if (!cats[normalized]) {
    errors.message(`Category "${normalized}" doesn't exist in config`)
    return cats
  }

  // TODO: I think this can be merged with the group condition. If one doesn't
  //  exist I don't think that the other will.
  if (!cats[normalized].snippets) {
    cats[normalized].snippets = {}
  }

  if (!cats[normalized].snippets[group]) {
    cats[normalized].snippets[group] = []
  }

  // Add snippet to the group collection.
  cats[normalized].snippets[group].push({
    title: snippet.data.title,
    url: snippet.url,
    slug: snippet.page.fileSlug
  })

  // Add and sort the groups collection
  cats[normalized].groups = [...(new Set(cats[normalized].groups))
    .add(group)]
    .sort((a, _) => (a === 'Other') ? 1 : -1)

  return cats
}

/**
 * Take an object tree and flatten it
 *
 * TODO: The types here are all fubar'd. This is used a lot so I need to figure this out
 *
 * @param {*} obj
 * @param {*} delimiter
 * @param {*} prefix
 * @returns
 */
export const transformCategories = (obj: CategoryTree, delimiter = '/', prefix = ''): Flattened =>
  Object.keys(obj).reduce((acc: Flattened, key: string) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : ''
    const isObject = typeof obj[key] === 'object'
    const notEmpty = obj[key] !== null
    const isLength = Object.keys(obj[key]).length > 0
    const isMeta = key === 'meta'

    // TODO: Can I clean this up somehow?
    if (isMeta) {
      acc[pre] = obj[key]
    } else if (isObject && notEmpty && isLength) {
      Object.assign(acc, transformCategories(obj[key], delimiter, pre + key))
    }

    return acc
  }, {})

/**
 * TODO: Memoize
 * TODO: Curry so I can call it simpler
 *
 * @param {*} doc
 * @returns
 */
export const flattened = (doc: CategoryTree): Flattened =>
  transformCategories(doc)
