import _ from 'lodash'
import utils from '@utils'
import { breadcrumbs } from '@utils/categories'

export default (eleventyConfig) => {
  const tree = utils.categories.flattened(utils.data.tree())

  Object.keys(utils.data.groups()).forEach(group => {
    const category = group.split('/').slice(0, -1).join('/') + '/'

    eleventyConfig.addTemplate(`${group}.njk`, '', {
      layout: 'category-grouping.njk',
      title: breadcrumbs(tree, category, true).map(e => e.name).slice(1).join(' » '),
      permalink: `${utils.vars.urls.category}/${group}/`,
      group: group,
      groupName: _.startCase(_.last(group.split('/'))),
      crumbs: breadcrumbs(tree, category, true),
    })
  })
}
