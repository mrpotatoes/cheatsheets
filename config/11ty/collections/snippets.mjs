import utils from '../../utils/index.mjs'

export default (collectionApi) => {
  const snippets = collectionApi.getFilteredByTag('snippets')

  // console.log('hey')

  const snips = snippets.reduce((acc, curr) => {
    const category = utils.categories.normalized(curr)

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

  return snips
}
