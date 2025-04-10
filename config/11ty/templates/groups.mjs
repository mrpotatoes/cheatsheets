import utils from '../../utils/index.mjs'
import _ from 'lodash'

/**
 * Data Structure
 *
 * permalink
 *  /code/tips/languages/javascript/strings/sorting
 *  /code/tips/languages/javascript/strings/other
 */
export default (eleventyConfig) => {
  // const tree = utils.data.tree()

  Object.keys(utils.data.groups()).forEach(group => {
    eleventyConfig.addTemplate(`${group}.njk`, '', {
      layout: 'category-grouping.njk',
      title: group,
      permalink: `${utils.vars.urls.category}/${group}/`,
      group: 'languages/javascript/strings/retrivals',
    })
  })
}