import dotenv from 'dotenv'
import collections from '@collections'
import events from '@events'
import plugins from '@plugins'
import utils from '@utils'

import { filters, shortcodes } from '@tplfns'
import { EleventyConfig, ReturnConfig } from '@mytypes/11ty'
import { serverConfig, basePath, port, snippetBase, outputDir, layoutsDir, drafts } from '@utils/variables'

// Setup environment variables
dotenv.config(utils.vars.dotenv())

// @ts-ignore
export default (eleventyConfig: EleventyConfig): ReturnConfig => {
  // Status messages
  console.log(`\nhttp://localhost:${port()}/\n`)

  // TODO: More options here: https://www.11ty.dev/docs/dev-server/
  // TODO: Fix these typings
  // @ts-ignore
  eleventyConfig.setServerOptions(serverConfig())

  // Additional watch targets
  eleventyConfig.addWatchTarget('contents/assets/')

  // Global Data
  eleventyConfig.addGlobalData('snippetBase', snippetBase())
  eleventyConfig.addGlobalData('basePath', basePath())

  // Register Plugins
  eleventyConfig.addPlugin(plugins.jsConfig)
  eleventyConfig.addPlugin(plugins.categoryBase)
  eleventyConfig.addPlugin(plugins.categoryChildren)
  eleventyConfig.addPlugin(plugins.groups)

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy(utils.vars.passthroughs.assets)
  // eleventyConfig.addPassthroughCopy(utils.vars.passthroughs.styles)

  // Preprocessors
  eleventyConfig.addPreprocessor('drafts', drafts.exts, drafts.fn)

  // Filters & Shortcodes
  eleventyConfig.addFilter('urlize', filters.urlize)
  eleventyConfig.addFilter('titlecase', filters.titlecase)
  eleventyConfig.addFilter('cat', filters.catPath)
  eleventyConfig.addFilter('md', filters.markdown)
  eleventyConfig.addFilter('json', filters.toJSON)
  eleventyConfig.addShortcode('categoryTree', shortcodes.snippetCatTree)

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(plugins.vento)

  // Collections
  eleventyConfig.addCollection('groupedSnippets', collections.snippetsGrouped)
  eleventyConfig.addCollection('fuzzysearch', collections.fuzzy)
  eleventyConfig.addCollection('groupsYaml', collections.groupsYaml)
  eleventyConfig.addCollection('crumbs', collections.breadcrumbs)

  // Transforms
  eleventyConfig.addTransform('minify-html', plugins.minify)
  eleventyConfig.addDataExtension(plugins.yaml.exts, plugins.yaml.parse)

  // Events
  eleventyConfig.on('eleventy.before', events.before)
  eleventyConfig.on('eleventy.after', events.after)

  return {
    // Depends on local v build.
    pathPrefix: basePath(),

    // Control which files Eleventy will process
    templateFormats: [ 'md', 'html', 'liquid', 'vto' ],

    // Pre-process *.md files with nunjucks
    markdownTemplateEngine: 'vto',

    // Pre-process *.html files with nunjucks
    htmlTemplateEngine: 'vto',

    // The rest of the setup
    dir: {
      input: 'contents',
      data: '../config/data',
      layouts: layoutsDir(),
      includes: layoutsDir(),
      output: outputDir(),
    }
  }
}
