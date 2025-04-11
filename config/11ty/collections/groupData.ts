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
  const empty = () => []
  const fn = utils.data.emptyObject(empty)
  const cats = fn(utils.categories.flattened(utils.data.tree()))
  const flattened = utils.categories.flattened(utils.data.tree())

  snippets.forEach((snip) => {
    // The group needs to be lowercased + slugified
    const group = (snip.data.group || 'other').toLowerCase()
    const catUrl = utils.categories.normalPath(snip)
    const crumbs = utils.categories.crumbs(flattened, catUrl)
    // console.log(crumbs)

    // Use set here instead
    if (!urls[`${catUrl}${group}`]) {
      urls[`${catUrl}${group}`] = []
    }

    urls[`${catUrl}${group}`].push({
      title: snip.data.title,
      url: snip.page.url,
      crumbs: crumbs,
    })
  })

  // console.log(urls['languages/javascript/strings/sorting'][0])
  // console.log(JSON.stringify(urls))
  // console.log(urls['browser/html/other'][0].crumbs)
  // console.log(urls)

  return urls
}
