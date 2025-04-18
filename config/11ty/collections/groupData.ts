/**
 * TODO: Delete me and move this to the fuzzy search collection.
 * TODO: Delete the groups.yml data file, maybe.
 */
import _ from 'lodash'
import utils from '@utils/index'
import { CollectionItem, EleventyConfig } from '@mytypes/11ty'
import { GroupedUrls } from '@mytypes/categories'
import { groups, tree } from '@utils/data'
import { breadcrumbs, flattenCategories } from '@utils/categories'

// TODO: Move this function to elsewhere.
export const isSameGroup = (updated: any): boolean => _.isEqual(updated, groups())
// TODO: Move this function to elsewhere.
export const cat = (snip: CollectionItem) => utils.categories.normalPath(snip)
// TODO: Move this function to elsewhere.
export const group = (snip: CollectionItem) => (snip.data.group || 'other').toLowerCase()

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
 * TODO: I do not believe that I can get collection via an api so I will have to
 *  save it to a file. In this case I still want to make sure that I do a deep
 *  comparison of the file's data and the object I build here.
 */
export default (collectionApi: EleventyConfig): GroupedUrls => {
  return collectionApi.getFilteredByTag('snippets').map((snip: CollectionItem) => ({
    cat: `${cat(snip)}${group(snip)}`,
    title: snip.data.title,
    url: snip.page.url,
    group: group(snip),
    // @ts-ignore
    crumbs: breadcrumbs(flattenCategories(tree()), cat(snip), true),
  }))
}

// ORIGINAL
// TODO: I may want to come back to this but i'll need a different
//  fuzzy search library.
//
// snippets.forEach((snip: CollectionItem) => {
//   // The group needs to be lowercased + slugified
//   const group = (snip.data.group || 'other').toLowerCase()
//   const catUrl = utils.categories.normalPath(snip)
//
//   if (!urls[`${catUrl}${group}`]) {
//     urls[`${catUrl}${group}`] = []
//   }
//
//   urls[`${catUrl}${group}`].push({
//     cat: `${catUrl}${group}`,
//     title: snip.data.title,
//     url: snip.page.url,
//     group: group,
//
//     // @ts-ignore
//     crumbs: breadcrumbs(flat, catUrl, true),
//   })
// })
