import _ from 'lodash'
import * as errors from './errors.mjs'
import * as vars from './variables.mjs'

/**
 * 
 * @param {*} url 
 * @param {*} slug 
 * @returns 
 */
export const catPath = (url, slug) => url
  .replace(`${slug}/`, '')
  .replace(`${vars.urls.category}snippets/`, '')

/**
 * 
 * @param {*} str 
 * @returns 
 */
export const segmented = (str, full) => {
  const trimmed = str.replace(/^\/+|\/+$/g, '').split('/')
  const length = full ? trimmed.length : trimmed.length - 1
  const paths = trimmed.slice(0, length)

  return paths
}

/**
 * 
 * @param {*} categories 
 * @param {*} path 
 * @returns 
 */
export const breadcrumbs = (categories, path, full = false) => {
  const split = segmented(path, full)
  const crumbs = [{ name: 'Snippets', url: vars.urls.category }]
  
  let acc = ''

  for (let i = 0; i < split.length; i++) {
    const e = split[i]
    acc = `${acc}${e}/`

    crumbs.push({
      name: categories[acc].name,
      url: vars.urls.category + acc,
    })
  }

  return crumbs
}

/**
 * 
 * @returns 
 */
export const emptySnippet = () => ({
  groups: [],
  snippets: {},
})

/**
 * 
 * @param {*} snip 
 * @returns 
 */
export const normalizedCategoryPath = (snip) => {
  const slug = snip.page.fileSlug
  const url = snip.page.url
  const cat = url.replace(vars.urls.category, '').replace(slug + '/', '')

  return cat
}

/**
 * 
 * @param {*} snippet 
 * @param {*} categories 
 * @param {*} group 
 * @returns 
 */
export const addGroup = (snippet, categories, group = 'other') => {
  const cats = _.cloneDeep(categories)
  const normalized = normalizedCategoryPath(snippet)
  
  // TODO: Make this part of the error messaging.
  if (!cats[normalized]) {
    // errors.message(`Category "${normalized}" doesn't exist in config`)
    return cats
  }

  if (!cats[normalized].snippets) {
    cats[normalized].snippets = {}
  }

  if (!cats[normalized].snippets[group]) {
    cats[normalized].snippets[group] = []
  }
  
  cats[normalized].snippets[group].push({
    title: snippet.data.title,
    url: snippet.url,
    slug: snippet.page.fileSlug
  })
  
  cats[normalized].groups = [...(new Set(cats[normalized].groups)).add(group)]

  return cats
}

/**
 * 
 * @param {*} obj 
 * @param {*} delimiter 
 * @param {*} prefix 
 * @returns 
 */
export const transformCategories = (obj, delimiter = '/', prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : ''
    const isObject = typeof obj[key] === 'object'
    const notEmpty = obj[key] !== null
    const isLength = Object.keys(obj[key]).length > 0
    const isMeta = key === 'meta'

    if (isMeta) {
      acc[pre] = obj[key]
    } else if (isObject && notEmpty && isLength) {
      Object.assign(acc, transformCategories(obj[key], delimiter, pre + key))
    }

    return acc
  }, {})

/**
 * 
 * @param {*} doc 
 * @returns 
 */
export const flattenCategories = (doc) => transformCategories(doc)
