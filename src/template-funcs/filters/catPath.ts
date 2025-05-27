import { EleventyPage } from '@mytypes/11ty'
import utils from '@utils'

/**
 * Get a normalized category path
 */
export default (page: EleventyPage): string =>
  utils.categories.normalPath({ page })
