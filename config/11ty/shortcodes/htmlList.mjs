import _ from 'lodash'

const href = (name, link) => (`<a href="${link}">${name}</a>`)
const path = (base, next) => (!next) ? `${base}/` : `${base}${next}/`
const li = (a, children, level, newPath) => `<ul><li>${a}${htmlList(children, level + 1, newPath)}</li></ul>`

/**
 * Remove levelStr when ready
 */
const htmlList = (cats, level = 0, prop = '') => {
  var str = ''

  for (var key in cats) {
    if (key === 'meta') {
      continue
    }

    const newPath = path(prop, key)
    const a = href(cats[key].meta.name, path('/code/tips/' + prop, key))

    str += li(a, cats[key], level + 1, newPath)
  }

  return str
}

export default (catTree) => `${htmlList(catTree)}`
