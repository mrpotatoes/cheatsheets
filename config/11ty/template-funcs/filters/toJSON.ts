import { isDev } from '@utils/variables'

/**
 * Output a JSON string
 *
 * If we're running in an env.DEVELOPMENT then we'll pretty print otherwise
 *  it's a simple straightforward string.
 */
export default (content: string): string =>
  (isDev())
    ? JSON.stringify(content, null, 2)
    : JSON.stringify(content)
