import path from 'path'

/**
 *
 * @param config
 * @returns
 */
export const targets = (config: string): string => `./config/11ty/${config}/**`

/**
 *
 * @returns
 */
export const basePath = (): any => process.env.BASE_PATH

/**
 *
 * @returns
 */
export const isDev = (): boolean => process.env.DEVELOPMENT === 'true'

/**
 * TODO: Convert to a function
 */
export const passthroughs = {
  // TODO: Use the path function to get these paths
  assets: { './config/assets': 'assets' },
  styles: { './config/styles': 'styles' },
}

/**
 *
 * @returns
 */
export const envFile = () =>
  !process.env.NODE_ENV ? 'env.development' : 'env.production'

/**
 *
 * @param type
 * @returns
 */
export const envPath = (type: string): string =>
  path.join(process.cwd(), 'config/build', type)

/**
 *
 * @returns
 */
export const snippetUrl = () => process.env.SNIPPET_URL

/**
 * TODO: Convert this to a function instead and it should take an env object
 */
export const urls = {
  category: '/code/tips/',
  sansTrailing: '/code/tips',
}

/**
 * TODO: Typings
 *
 * @param options
 * @returns
 */
export const dotenvConfig = (options = {}) => ({
  path: envPath(envFile()),
  debug: true,
})

export const serverConfig = () => ({
  // TODO: Retrieve this from the env files instead.
  port: process.env.PORT,
})
