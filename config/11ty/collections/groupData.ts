import _ from 'lodash'
import utils from '@utils/index'

/**
 * Process:
 *
 * - Get categories object
 * - Generate a unique url
 *    - category + group
 * - Save to a URLs object
 * - Save this object to a file in the after event
 * - Once those URLs are created I create virtual templates based on that
 *
 * Example URL
 *  - /code/tips/languages/javascript/strings/retrivals/
 */
export default (collectionApi) => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const urls = {}
  const flattened = utils.categories.flattened(utils.data.tree())

  snippets.forEach((snip) => {
    // The group needs to be lowercased + slugified
    const group = (snip.data.group || 'other').toLowerCase()
    const catUrl = utils.categories.normalPath(snip)
    const crumbs = utils.categories.crumbs(flattened, catUrl)

    // Use set here instead
    if (!urls[`${catUrl}${group}`]) {
      urls[`${catUrl}${group}`] = []
    }

    urls[`${catUrl}${group}`].push({
      title: snip.data.title,
      url: snip.page.url,
      group: group,
    })
  })

  return urls
}
