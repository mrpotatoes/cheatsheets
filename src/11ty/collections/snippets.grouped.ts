import utils from '@utils'
import { Grouped } from '@mytypes/categories'
import { CollectionItem, EleventyConfig } from '@mytypes/11ty'

export default (collectionApi: EleventyConfig): Grouped => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const cats = utils.categories.tree()
  let categories = utils.categories.clear(utils.categories.flattened(cats))

  // TODO: Let's not reset the entire categories object each time.
  snippets.forEach((snippet: CollectionItem) => {
    categories = utils.categories.addGroup(snippet, categories, snippet.data.group)
  })

  return categories
}
