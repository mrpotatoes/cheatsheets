import { transformCategories, flattenCategories, yamlData } from './flatten-categories.mjs'

const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')

const normalizedCategory = (snip) => {
  const pathKey = '/code/tips/snippets/'
  const slug = snip.page.fileSlug
  const url = snip.page.url
  const cat = url.replace(pathKey, '').replace(slug + '/', '')

  return cat
}

const category = (str) => {
  const trimmed = trimSlashes(str).split('/')
  const paths = trimmed.slice(0, trimmed.length - 1)
  return paths
}

const breadcrumbs = (categories, path) => {
  const split = category(path)
  const crumbs = [{ name: 'Snippets', url: '/code/tips/' }]
  let acc = ''

  for (let i = 0; i < split.length; i++) {
    const e = split[i]
    acc = `${acc}${e}/`

    crumbs.push({
      name: categories[acc].name,
      url: '/code/tips/' + acc,
    })
  }

  return crumbs
}

export default {
  transformCategories,
  category,
  flattenCategories,
  breadcrumbs,
  trimSlashes,
  yamlData,
  normalizedCategory,
}