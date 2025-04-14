import { EleventyPage } from '@mytypes/11ty'
import { CatSnippet } from '@mytypes/categories'
import utils from '@utils'

export default (page: CatSnippet): string =>
  utils.categories.normalPath({ page } as EleventyPage)
