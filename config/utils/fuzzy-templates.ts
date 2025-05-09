// @ts-nocheck

/**
 *
 * @param results
 * @returns
 */
export const resTpl = (results) => Object.keys(results)
  .map(key => `<div class="snippet-group-left"><p>${groupUrl(results[key][0], key)}</p><ul>${snippetsTpl(results[key])}</ul></div>`)
  .join('')

/**
 *
 * @param res
 * @param text
 * @returns
 */
export const groupUrl = (res, text) => `<p><b><a href="/code/tips/${res.catU}">${text}</b></p>`


/**
 *
 * @param r
 * @returns
 */
export const snippetsTpl = (r) => r.map(e => `<li><a href="${e.url}">${e.title}</a></li>`).join('')

/**
 *
 * @param results
 * @returns
 */
export const remapped = (results) => results.reduce((acc, curr) => {
  const cat = curr.obj.crumbs2

  const next = {
    title: curr[0].highlight('<b class="idx">', '</b>') || curr.obj.title,
    group: curr[1].highlight('<b class="idx">', '</b>') || curr.obj.group,
    cat: curr[2].highlight('<b class="idx">', '</b>') || curr.obj.crumbs2,
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
