import { EleventyPage } from '@mytypes/11ty'
import { snippetBase } from '@utils/variables'

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
 * TODO: Make this take the URL
 *
 * @returns
 */
export const sansTrailing = (): string => snippetBase().slice(0, -1)

// http://localhost:8081/code/tips/languages/javascript/strings/check-if-a-url-is-absolute/
export const absolute = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/check-if-a-path-is-relative/
export const relative = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/normalize-file-path-slashes/
export const normalize = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/get-the-base-url-without-any-parameters/
export const cleaned = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/get-the-file-name-from-a-url/
export const filename = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/convert-a-string-to-url-slug/
export const slugify = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/format-a-string/
export const format = () => { }

// http://localhost:8081/code/tips/languages/javascript/strings/convert-a-string-to-pascal-case/
export const pascalCase = () => { }
