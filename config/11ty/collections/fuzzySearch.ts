import _ from 'lodash'
import { CollectionItem, EleventyConfig } from '@mytypes/11ty'
import { breadcrumbs, flattenCategories, normalizedCategoryPath } from '@utils/categories'
import { tree } from '@utils/data'

// TODO: Fix typing
export default (collectionApi: EleventyConfig): any => {
  // @ts-ignore
  const flat = flattenCategories(tree())

  // TODO: Fix typing
  // @ts-ignore
  return collectionApi.getFilteredByTag('snippets').map(snippet => {
    const cat = normalizedCategoryPath(snippet)

    return {
      title: snippet.data.title,
      url: snippet.page.url,
      // crumbs: breadcrumbs(flat, cat, true),
      crumbs: breadcrumbs(flat, cat, true).map(e => e.title).join(' > '),
    }
  })
}
