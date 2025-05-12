/**
 * TODO: Delete me and move this to the fuzzy search collection.
 * TODO: Delete the snippets-grouped.yml data file, maybe.
 */
import _ from 'lodash'
import { tree } from '@utils/data'
import { GroupedUrls } from '@mytypes/categories'
import { CollectionItem, EleventyConfig } from '@mytypes/11ty'
import { flattenCategories, group, normalizedCategoryPath, categoryPath } from '@utils/categories'

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
 *  - /{SNIPPET_URL}/languages/javascript/strings/retrivals/
 *
 * TODO: Fix typings
 */
export default (collectionApi: EleventyConfig): GroupedUrls =>
  collectionApi.getFilteredByTag('snippets').map((snip: CollectionItem) => ({
    cat: normalizedCategoryPath(snip),
    title: snip.data.title,
    url: snip.page.url,
    group: group(snip),

    // @ts-ignore TODO: Fix typings here
    crumbs: categoryPath(flattenCategories(tree()), normalizedCategoryPath(snip), true),
  }))
