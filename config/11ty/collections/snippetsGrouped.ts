import { Grouped } from '@mytypes/categories'
import utils from '@utils'
import { Config, EleventyPage } from '@mytypes/11ty'

export default (collectionApi: Config): Grouped => {
  const snippets = collectionApi.getFilteredByTag('snippets')
  const cats = utils.categories.tree()
  let categories = utils.categories.clear(utils.categories.flattened(cats))

  // TODO: Let's not reset the entire categories object each time.
  snippets.forEach((snippet: EleventyPage) => {
    categories = utils.categories.addGroup(snippet, categories, snippet.data.group)
  })

  return categories
}
