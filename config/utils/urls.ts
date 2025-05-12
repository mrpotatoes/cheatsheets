import { EleventyPage } from '@mytypes/11ty'
import { snippetBase, urls } from '@utils/variables'

/**
 *
 * @returns
 */
export const snippetBasePath = () => snippetBase().replace(/^\/+|\/+$/g, '')

/**
 *
 * @param page
 * @returns
 */
export const snippetPermalink = (page: EleventyPage): string =>
  `${sansTrailing()}${page.filePathStem.replace('snippets/', '')}/`

/**
 *
 * @returns
 */
export const sansTrailing = (): string =>
  snippetBase().slice(0, -1)
