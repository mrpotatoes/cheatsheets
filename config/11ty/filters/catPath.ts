import { EleventyPage } from '@mytypes/11ty'
import utils from '@utils'

export default (page: EleventyPage): string =>
  utils.categories.normalPath({ page })
