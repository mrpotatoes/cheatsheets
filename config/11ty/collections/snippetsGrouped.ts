import utils from '@utils'

export default (collectionApi) => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const cats = utils.categories.tree()
  let categories = utils.categories.clear(utils.categories.flattened(cats))

  // console.log(Object.keys(snippets))

  // TODO: Let's not reset the entire categories object each time.
  snippets.forEach(snippet => {
    categories = utils.categories.addGroup(snippet, categories, snippet.data.group)
  })

  return categories
}
