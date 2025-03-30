import { transformCategories, categories, yamlData } from './flatten-categories.mjs'

const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')

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

const subTreePaths = () => {
  // const f = utils.yamlData('categories.yml')
  // const subtree = _.get(f, 'browser.html.hey')
  // console.log(f.browser.html.hey)
  // console.log()
  // console.log(utils.transformCategories({ hey: subtree }))
}

export default {
  transformCategories,
  category,
  categories,
  breadcrumbs,
  trimSlashes,
  yamlData,
  subTreePaths,
}