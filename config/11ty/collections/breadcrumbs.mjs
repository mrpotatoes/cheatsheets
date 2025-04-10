import _ from 'lodash'
import utils from '../../utils/index.mjs'

export default (collectionApi) => {
  const cats = utils.categories.tree()
  const flattened = utils.categories.flattened(cats)

  return _.reduce(flattened, (result, _, key) => ({
    ...result,
    [key]: utils.categories.crumbs(flattened, key, true),
  }), {})
}
