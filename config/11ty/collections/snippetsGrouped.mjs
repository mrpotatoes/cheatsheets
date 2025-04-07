import utils from '../../utils/index.mjs'

export default (collectionApi) => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const cats = utils.categories.tree()
  let categories = utils.categories.clear(utils.categories.flattened(cats))
  
  // TODO: Let's not reset the entire categories object each time.
  snippets.forEach(snippet => {
    categories = utils.categories.addGroup(snippet, categories, snippet.data.group)
  })
  
  return categories
}
