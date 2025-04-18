import _ from 'lodash'
import utils from '@utils'
import { EleventyConfig } from '@mytypes/11ty'
import { Snippets } from '@mytypes/categories'

// TODO: Type here is busted.
export default (collectionApi: EleventyConfig): Snippets => {
  const cats = utils.categories.tree()
  const flattened = utils.categories.flattened(cats)

  return _.reduce(flattened, (result, _, key) => ({
    ...result,
    [key]: utils.categories.crumbs(flattened, key, true),
  }), {})
}
