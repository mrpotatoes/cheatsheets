import type { Join, LiteralUnion } from 'type-fest'

// TODO: Add missing types: https://github.com/panoply/e11ty/blob/master/packages/11ty.ts/index.ts
type TemplateEngines = LiteralUnion<
  | 'html'
  | 'md'
  | '11ty.js'
  | 'liquid'
  | 'njk'
  | 'hbs'
  | 'mustache'
  | 'ejs'
  | 'haml'
  | 'pug'
  | 'jstl'
  , string>

type TemplateFormats = LiteralUnion<
  | 'html'
  | 'md'
  | 'liquid'
  | 'haml'
  | 'hbs'
  | 'pug'
  | 'njk'
  | 'json'
  | 'css'
  | 'ejs'
  | 'haml'
  | 'njk'
  | 'hbs'
  | 'mustache'
  , string>

type EventNamesDeprecated = LiteralUnion<
  | 'beforeBuild'
  | 'beforeWatch'
  | 'afterBuild'
  , string>

type EventNames = LiteralUnion<
  | 'eleventy.before'
  | 'eleventy.after'
  | 'eleventy.beforeConfig'
  | 'eleventy.beforeWatch'
  | 'eleventy.resourceModified'
  | 'eleventy.resourceAdded'
  | 'eleventy.resourceDeleted'
  , string>

export type AsyncFilter = (error: unknown | null, result?: any) => void

export type EleventyPlugin = (eleventy: any, options?: any) => any

export type GetPluginOptions<T extends EleventyPlugin> = Parameters<T>[1]

export interface PluginExtend {
  addPlugin<Plugin extends EleventyPlugin, PluginOptions extends GetPluginOptions<Plugin>>(
    plugin: Plugin,
    options?: PluginOptions
  ): void
}

export interface CollectionItem {
  page: EleventyPage
  data: any
  url: string
}

export type CollectionItemPicked = Pick<CollectionItem, 'page'>

export interface CollectionApi {
  getFilteredByTag(tag: string): CollectionItem[]
  getAll(): CollectionItem[]
  getAllSorted(): CollectionItem[]
  getFilteredByTag(tag: string): CollectionItem[]
  getFilteredByTags(...tags: string[]): CollectionItem[]
  getFilteredByGlob(tag: string): CollectionItem[]
}

export interface EleventyPage {
  date: Date
  filePathStem: string
  fileSlug: string
  inputPath: string
  lang: string
  outputFileExtension: string
  outputPath: string | false
  templateSyntax: string
  url: string
}

export interface EleventyData {
  version: string
  generator: string
  env: {
    /**
     * Absolute path to the directory in which you've run the Eleventy command.
     *
     * @example
     * "1.0.1"
     */
    root: string
    /**
     * Absolute path to the current config file
     *
     * @example
     * '/Users/zachleat/myProject/.eleventy.js'
     */
    config: string
    /**
     * The method, either `cli` or `script`
     */
    source: 'cli' | 'script'
    /**
     * One of `serve`, `watch`, or `build`
     */
    runMode: 'serve' | 'watch' | 'build'
  }
  serverless: {
    /**
     * An object containing the values from any Dynamic URL
     * slugs from Serverless paths
     *
     * For Example:
     *
     * A slug for `/path/:id/` and a URL for `/path/1/` would give:
     *
     * @example
     * { id: 1 }
     */
    path: {
      [key: string]: any
    }
    /**
     * The `event.queryStringParameters` received from the
     * serverless function. Note these are not available in Netlify On-demand Builders
     *
     * @example
     *
     * // ?id=1
     * { id: 1 }
     */
    query: {
      [key: string]: any
    }
  }
}

export interface EleventyScope {
  page: EleventyPage
  eleventy: EleventyData
}

export interface EleventyServer {
  liveReload?: boolean
  domDiff?: boolean
  port?: number
  watch?: string[]
  showAllHosts?: boolean
  https?: {
    key?: string
    cert?: string
  }
  encoding?: string
  showVersion?: boolean
  injectedScriptsFolder?: string
  portReassignmentRetryCount?: number
  folder?: string
  enabled?: boolean
  domdiff?: boolean
}

export interface EleventyBrowserSync extends EleventyServer {
  // module: LiteralUnion<'@11ty/eleventy-server-browsersync', string>
  snippet?: boolean
}

export interface EleventDataExtension {
  parser: (contents: string, filePath: string) => Record<string, any>
  read?: boolean
  encoding?: string | null
}

export interface Filters {
  addLiquidFilter(
    filterName: string,
    filter: (this: EleventyScope, ...args: any[]) => string): void

  addHandlebarsHelper(
    filterName: string,
    filter: (this: EleventyScope, ...args: any[]) => string): void

  addJavaScriptFunction(
    filterName: string,
    filter: (this: EleventyScope, ...args: any[]) => string | PromiseLike<string>): void

  addNunjucksFilter(
    filterName: string,
    filter: (this: EleventyScope, ...args: any[]) => string): void

  addNunjucksAsyncFilter(
    filterName: string,
    filter: (this: EleventyScope, callback: AsyncFilter) => void): void

  addNunjucksAsyncFilter(
    filterName: string,
    filter: (this: EleventyScope, arg: any, callback: AsyncFilter) => void): void

  addNunjucksAsyncFilter(
    filterName: string,
    filter: (this: EleventyScope, arg1: any, arg2: any, callback: AsyncFilter) => void): void
}

export interface ShortCodes {
  addLiquidShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, ...args: any[]) => string | PromiseLike<string>): void

  addNunjucksShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, ...args: any[]) => string | PromiseLike<string>): void

  addHandlebarsShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, ...args: any[]) => string): void

  addJavaScriptFunction(
    shortcodeName: string,
    filter: (this: EleventyScope, ...args: any[]) => string | PromiseLike<string>): void

  addPairedLiquidShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, content: string, ...args: any[]) => string | PromiseLike<string>): void

  addPairedNunjucksShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, content: string, ...args: any[]) => string | PromiseLike<string>): void

  addPairedHandlebarsShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, content: string, ...args: any[]) => string): void
}

export interface EleventyConfig extends Filters, ShortCodes, PluginExtend {
  [method: string]: any

  ignores: Set<string>

  setServerOptions: {
    (options: EleventyServer): void
    (options: EleventyBrowserSync): void
  }

  setQuietMode(quiet: boolean): void

  namespace(prefix: string, callback: () => any): void

  // setChokidarConfig(options: WatchOptions): void

  setTemplateFormats(formats: readonly TemplateEngines[] | Join<TemplateEngines[], ','>): void

  setDataDeepMerge(deepMerge: boolean): void

  setFrontMatterParsingOptions(options: any): void

  setWatchJavaScriptDependencies(watch: boolean): void

  setDataFileBaseName(name: string): void

  addCollection(
    name: string,
    callback: (collectionApi: EleventyConfig) => any
  ): void

  addDataExtension(
    fileExtension: string,
    callback: (this: EleventyScope, contents: any, filePath?: string) => EleventDataExtension | unknown): void

  setDataFileSuffixes(files: string[]): void

  setBrowserSyncConfig(browserSyncOptions: any): void

  setWatchThrottleWaitTime(ms: number): void

  addWatchTarget(target: string): void

  setUseGitIgnore(use: boolean): void

  addTransform(
    name: string,
    transform: (this: EleventyScope, content: string, outputPath: string) => string | PromiseLike<string>): void

  addLinter(
    name: string,
    linter: (this: EleventyScope, content: string, inputPath: string, outputPath: string) => void): void

  dataFilterSelectors: Set<string>

  addPassthroughCopy(path: string | {
    [input: string]: string
  }): void

  addFilter(
    filterName: string,
    filter: (this: EleventyScope, ...args: any[]) => string): void

  getFilter(filterName: string): (...args: any[]) => string

  addShortcode(
    shortcodeName: string,
    filter: (this: EleventyScope, ...args: any[]) => string | PromiseLike<string>): void

  addPairedShortcode(
    pairedShortcodeName: string,
    filter: (this: EleventyScope, content: string, ...args: any[]) => string | PromiseLike<string>): void

  setLibrary(name: string, instance: any): void

  on(event: EventNames, handler: () => void): void

  /**
   * Deprecated Event Name, Use the new Event names:
   *
   * - `eleventy.before`
   * - `eleventy.after`
   * - `eleventy.beforeWatch`
   *
   * [11ty Docs](https://www.11ty.dev/docs/events/)
   *
   * @deprecated
   */
  // on(event: EventNamesDeprecated, handler: () => void): void
}

export interface ReturnConfig {
  dir?: {
    /**
     * Input directory
     */
    input?: string
    /**
     * Output directory
     */
    output?: string
    /**
     * Directory for includes
     */
    includes?: string
    /**
     * Directory for layouts
     */
    layouts?: string
    /**
     * Directory for global data files
     */
    data?: string
  }

  dataTemplateEngine?: TemplateEngines | false
  markdownTemplateEngine?: TemplateEngines | false
  htmlTemplateEngine?: TemplateEngines | false

  templateFormats?: string | string[]

  pathPrefix?: string

  htmlOutputSuffix?: string

  jsDataFileSuffix?: string

  passthroughFileCopy?: boolean
}
