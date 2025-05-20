import _ from 'lodash'
import utils from '@utils'
import { EleventyConfig } from '@mytypes/11ty'

/**
 * https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink
 *
 * TODO: Type is messed up here.
 */
export default (eleventyConfig: EleventyConfig): void => {
  const cats = utils.data.tree()
  const flattened = utils.categories.flattened(cats)

  Object.keys(flattened).forEach((cat) => {
    const path = cat.replace(/^\/+|\/+$/g, '').replaceAll('/', '.')

    eleventyConfig.addTemplate(utils.categories.tpl(cat), '', {
      layout: 'category.njk',
      title: flattened[cat].name,
      desc: flattened[cat].desc,
      permalink: utils.categories.link(utils.strings.trimSlashes(cat)),

      category: cat,
      catTree: { [cat]: _.get(cats, path) },
      catTreeCount: Object.keys(_.get(cats, path)).length - 1,
      crumbs: utils.categories.crumbs(flattened, cat, false),
    })
  })
}
