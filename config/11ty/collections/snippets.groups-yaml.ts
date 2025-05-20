import _ from 'lodash'
import { saveGroups } from '@utils/data'
import { catGroupUrl, hasCategory } from '@utils/categories'
import { Snippets } from '@mytypes/categories'
import { EleventyConfig, CollectionItem } from '@mytypes/11ty'

export default (collectionApi: EleventyConfig): Snippets =>
  saveGroups(collectionApi
    .getFilteredByTag('snippets')
    .reduce((acc: Snippets, curr: CollectionItem) => {
      // TODO: I know I can simplify this so do that. yo.
      if (hasCategory(acc, curr)) {
        acc[catGroupUrl(curr)] = []
      }

      return {
        ...acc,
        [catGroupUrl(curr)]: [
          ...acc[catGroupUrl(curr)], {
            title: curr.data.title,
            url: curr.url,
          }
        ]
      }
    }, {})
  )

