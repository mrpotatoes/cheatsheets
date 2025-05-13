import _ from 'lodash'
import utils from '@utils'
import { EleventyConfig } from '@mytypes/11ty'
import { snippetBase } from '@utils/variables'

/**
 * https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink
 */
export default (eleventyConfig: EleventyConfig): void => {
  const cats = utils.data.tree()

  eleventyConfig.addTemplate('index.njk', '', {
    layout: 'category.njk',
    title: 'Snippets',
    desc: '',
    permalink: snippetBase(),
    catTree: cats,
    catTreeCount: true,
    crumbs: [],
  })
}
