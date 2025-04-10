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
  Object.keys(utils.data.groups()).forEach(group => {
    eleventyConfig.addTemplate(`${group}.njk`, '', {
      layout: 'category-grouping.njk',
      title: group,
      permalink: `/code/tips/${group}/`,
      group: 'languages/javascript/strings/retrivals',
    })
  })
}