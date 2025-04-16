import { CollectionApi, CollectionItem } from '@mytypes/11ty'
import { Snippets } from '@mytypes/categories'
import utils from '@utils/index'

export default (collectionApi: CollectionApi): Snippets => collectionApi
  .getFilteredByTag('snippets')
  .reduce((acc: Snippets, curr: CollectionItem) => {
    const category = utils.categories.normalPath(curr)

    if (acc[category] === undefined) {
      acc[category] = []
    }

    const next = {
      title: curr.data.title,
      url: curr.url,
    }

    return {
      ...acc,
      [category]: [
        ...acc[category],
        next,
      ],
    }
  }, {})
