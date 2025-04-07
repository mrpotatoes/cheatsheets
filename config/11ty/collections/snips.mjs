/**
 * Get a list of documents with the "snippets" tag and organize by category
 */
import utils from '../../utils/index.mjs'

export default (collectionApi) => 
  collectionApi.getFilteredByTag('snippets').reduce((acc, curr) => {
    const category = utils.normalizedCategory(curr)

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
