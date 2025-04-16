import _ from 'lodash'
import utils from '@utils/index'
import { CollectionItem, EleventyConfig } from '@mytypes/11ty'
import { GroupedUrls } from '@mytypes/categories'

/**
 * Process
 *  - Get categories object
 *  - Generate a unique url
 *    - category + group
 *  - Save to a URLs object
 *  - Save this object to a file in the after event
 *  - Once those URLs are created I create virtual templates based on that
 *
 * Example URL
 *  - /code/tips/languages/javascript/strings/retrivals/
 *
 * TODO: Fix typings
 */
export default (collectionApi: EleventyConfig): GroupedUrls => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const urls = {}

  snippets.forEach((snip: CollectionItem) => {
    // The group needs to be lowercased + slugified
    const group = (snip.data.group || 'other').toLowerCase()
    const catUrl = utils.categories.normalPath(snip)

    /**
     * TODO: Element implicitly has an 'any' type because expression of type '`${string}${any}`' can't be used to index type '{}'
     * TODO: Use set here instead
     */
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
