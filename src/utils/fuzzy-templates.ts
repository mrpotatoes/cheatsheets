import { FuzzySearch2, FuzzySearchRemapped, Remapped } from '@mytypes/categories'
// import type Fuzzysort from 'fuzzysort'

/**
 *
 * @param results
 * @returns
 */
export const resTpl = (results: FuzzySearchRemapped): string => Object.keys(results)
  .map(key => `<div class="snippet-group-left"><p>${groupUrl(results[key][0], key)}</p><ul>${snippetsTpl(results[key])}</ul></div>`)
  .join('')

/**
 *
 * @param res
 * @param text
 * @returns
 */
export const groupUrl = (res: Remapped, text: string): string =>
  `<p><b><a href="${window.path}${window.base}/${res.catU}">${text}</b></p>`

/**
 *
 * @param url
 * @returns
 */
export const fullUrl = (url: string): string => `${window.path}${url.substring(1)}`

/**
 *
 * @param r
 * @returns
 */
export const snippetsTpl = (r: FuzzySearch2[]): string => r.map(e => `<li><a href="${fullUrl(e.url)}">${e.title}</a></li>`).join('')

/**
 * TODO: Fix the rest of my typings pls
 *
 * @param results
 * @returns
 */
export const remapped = (results: Fuzzysort.KeyResults<FuzzySearch2>) => results.reduce((acc, curr) => {
  const cat = curr.obj.crumbs

  const next = {
    title: curr[0].highlight('<b class="idx">', '</b>') || curr.obj.title,
    group: curr[1].highlight('<b class="idx">', '</b>') || curr.obj.group,
    cat: curr[2].highlight('<b class="idx">', '</b>') || curr.obj.crumbs,
    url: curr.obj.url,
    catU: curr.obj.cat,
  }

  if (acc[cat] === undefined) {
    acc[cat] = []
  }

  return {
    ...acc,
    [cat]: [
      ...acc[cat],
      next,
    ],
  }
}, {})
