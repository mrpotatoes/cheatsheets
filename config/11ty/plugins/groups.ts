import _ from 'lodash'
import utils from '@utils'
import { breadcrumbs } from '@utils/categories'
import { EleventyConfig } from '@mytypes/11ty'
import { snippetBase } from '@utils/variables'

/**
 * TODO: Fix typings
 * TODO: See if I can get the Collection API somehow so I can use that to get
 *  all the items. Possible? Otherwise I need to keep the snippets-grouped.yml
 */
export default (eleventyConfig: EleventyConfig) => {
  // @ts-ignore
  const tree = utils.categories.flattened(utils.data.tree())

  Object.keys(utils.data.groups()).forEach(group => {
    const category = group.split('/').slice(0, -1).join('/') + '/'

    eleventyConfig.addTemplate(`${group}.njk`, '', {
      layout: 'category-grouping.njk',
      title: breadcrumbs(tree, category, true).map(e => e.title).slice(1).join(' » '),
      permalink: `${snippetBase()}/${group}/`,
      group: group,
      groupName: _.startCase(_.last(group.split('/'))),
      crumbs: breadcrumbs(tree, category, true),
    })
  })
}
