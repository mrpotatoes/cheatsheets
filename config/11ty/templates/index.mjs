import utils from '../../utils/index.mjs'
import _ from 'lodash'

const catLink = (id) => (`${utils.vars.urls.category}${id}/`)
const catTpl = (id) => (`sub-category/${id}.njk`)

/**
 * https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink
 */
const virtualTemplates = (eleventyConfig) => {
  const cats = utils.data.tree()
  const flattened = utils.categories.flattened(cats)

  eleventyConfig.addTemplate('index.njk', '', {
    layout: 'category.njk',
    title: 'Snippets',
    desc: '',
    permalink: utils.vars.urls.category,
    catTree: cats,
    catTreeCount: true,
    crumbs: [],
  })

  Object.keys(flattened).forEach((cat) => {
    const path = cat.replace(/^\/+|\/+$/g, '').replaceAll('/', '.')

    eleventyConfig.addTemplate(catTpl(cat), '', {
      layout: 'category.njk',
      title: flattened[cat].name,
      desc: flattened[cat].desc,
      permalink: catLink(utils.strings.trimSlashes(cat)),

      category: cat,
      catTree: { [cat]: _.get(cats, path) },
      catTreeCount: Object.keys(_.get(cats, path)).length - 1,
      crumbs: utils.categories.crumbs(flattened, cat, false),
    })
  })
}

export default {
  virtualTemplates,
}

