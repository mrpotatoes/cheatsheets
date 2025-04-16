import _ from 'lodash'
import utils from '@utils/index'
import { CategoryTree } from '@mytypes/categories'

/**
 *
 * @param name
 * @param link
 * @returns
 */
const href = (name: string, link: string): string => (`<a href="${link}">${name}</a>`)

/**
 *
 * @param base
 * @param next
 * @returns
 */
const path = (base: string, next: string): string => (!next) ? `${base}/` : `${base}${next}/`

/**
 * TODO: Fix my typings
 *
 * @param a
 * @param children
 * @param level
 * @param newPath
 * @returns
 */
const li = (a: string, children: CategoryTree, level: number, newPath: string): string => `<ul><li>${a}${htmlList(children, level + 1, newPath)}</li></ul>`

/**
 * TODO: Remove level when ready
 * TODO: Fix typings here
 *
 * @param cats
 * @param level
 * @param prop
 * @returns
 */
const htmlList = (cats: CategoryTree, level = 0, prop = ''): string => {
  var str = ''

  for (let key in cats) {
    if (key === 'meta') {
      continue
    }

    const newPath = path(prop, key)
    const a = href(cats[key].meta.name, path(utils.vars.urls.category + prop, key))

    str += li(a, cats[key], level + 1, newPath)
  }

  return str
}

export default (catTree: CategoryTree): string => htmlList(catTree)
