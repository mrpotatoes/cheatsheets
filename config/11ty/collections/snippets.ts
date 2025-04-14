import { Config } from '@mytypes/11ty'
import utils from '@utils/index'

export default (collectionApi: Config) => collectionApi
  .getFilteredByTag('snippets').reduce((acc, curr) => {
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
