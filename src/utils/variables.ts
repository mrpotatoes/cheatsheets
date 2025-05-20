import path from 'path'

/**
 * The snippet base path from an env file.
 *
 * @returns The snippet base path string
 */
export const snippetBase = (): string => process.env.SNIPPET_URL || ''

/**
 *
 * @returns
 */
export const snippetUrl = () => process.env.SNIPPET_URL || ''

/**
 *
 * @returns
 */
export const port = () => process.env.PORT || ''

/**
 * TODO: Convert to a function
 */
export const passthroughs = {
  // TODO: Use the path function to get these paths
  assets: { './src/assets': 'assets' },
  styles: { './src/styles': 'styles' },
}

/**
 *
 * @param config
 * @returns
 */
export const targets = (config: string): string => `./src/11ty/${config}/**`

/**
 *
 * @returns
 */
export const basePath = (): string => process.env.BASE_PATH || ''

/**
 *
 * @returns
 */
export const isDev = (): boolean => process.env.DEVELOPMENT === 'true'

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
export const outputDir = (): string => process.env.OUTPUT || 'cheatsheets'

/**
 *
 * @returns
 */
export const workingDir = (): string => process.env.PWD || '/'

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

/**
 *
 * @returns
 */
export const serverConfig = () => ({
  // TODO: Retrieve this from the env files instead.
  port: port(),
})
