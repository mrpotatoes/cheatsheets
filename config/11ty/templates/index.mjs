import utils from '../../utils/index.mjs'
import _ from 'lodash'

const catLink = (id) => (`/code/tips/${id}/`)
const catTpl = (id) => (`code/tips/${id}.njk`)

/**
 * Documentation
 *  - https://www.11ty.dev/docs/virtual-templates/
 *  - https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink
 */
const virtualTemplates = (eleventyConfig) => {
  const cats = utils.yamlData('categories.yml')
  const flattened = utils.flattenCategories(cats)

  eleventyConfig.addTemplate('code/tips/index.njk', '', {
      layout: 'test.njk',
      title: 'Snippets',
      desc: '',
      permalink: '/code/tips/',
      catTree: cats,
      cats: Object.keys(flattened).map(e => ({
        url: e,
        title: flattened[e].name,
        desc: flattened[e].desc,
      })),
      crumbs: [],
      subcat: `/code/tips/`, // Delete here
    }
  )

  Object.keys(flattened).forEach((cat) => {
    const path = cat.replace(/^\/+|\/+$/g, '').replaceAll('/', '.')
    const subTree = {
      [cat]: _.get(cats, path)
    }

    eleventyConfig.addTemplate(catTpl(cat), '', {
      layout: 'test.njk',
      catTree: subTree,
      title: flattened[cat].name,
      desc: flattened[cat].desc,
      permalink: catLink(cat),
      cats: flattened,
      crumbs: utils.breadcrumbs(flattened, cat),
      subcat: `/code/tips/${cat}`,
    })
  })
}

export default {
  virtualTemplates,
}

