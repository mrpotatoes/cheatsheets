import _ from 'lodash'
import utils from '@utils'
import { Config } from '@mytypes/11ty'

export default (collectionApi: Config) => {
  const cats = utils.categories.tree()
  const flattened = utils.categories.flattened(cats)

  return _.reduce(flattened, (result, _, key) => ({
    ...result,
    [key]: utils.categories.crumbs(flattened, key, true),
  }), {})
}
