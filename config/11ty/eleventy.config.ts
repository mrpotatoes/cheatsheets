import _ from 'lodash'
import collections from '@collections/index'
import events from '@events/index'
import filters from '@filters/index'
import plugins from '@plugins/index'
import tpls from '@templates/index'
import transforms from '@transforms/index'
import shortCodes from '@shortcodes/index'
import utils from '@utils/index'
import { CollectionApi, EleventyConfig, ReturnConfig } from '@mytypes/11ty'

// https://www.11ty.dev/docs/ignores/
export default (eleventyConfig: EleventyConfig): ReturnConfig => {
  // Global Data
  eleventyConfig.addGlobalData('snippetBase', utils.vars.urls.category)

  // Virtual Templates
  tpls.virtualTemplates(eleventyConfig)
  tpls.groups(eleventyConfig)

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy(utils.vars.passthroughs.assets)
  // eleventyConfig.addPassthroughCopy(utils.vars.passthroughs.styles)

  // Filters
  eleventyConfig.addFilter('urlize', filters.urlize)
  eleventyConfig.addFilter('titlecase', filters.titlecase)
  eleventyConfig.addFilter('debug', filters.debugFilter)
  eleventyConfig.addFilter('cat', filters.catPath)
  eleventyConfig.addFilter('md', filters.markdown)
  eleventyConfig.addFilter('json', (content): string => JSON.stringify(content))

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)

  // Collections
  eleventyConfig.addCollection('groupedSnippets', collections.snippetsGrouped)
  eleventyConfig.addCollection('crumbs', collections.breadcrumbs)
  eleventyConfig.addCollection('groupedUrls', collections.groupData)
  eleventyConfig.addCollection('fuzzy', collections.fuzzySearch)
  // ✅ eleventyConfig.addCollection('related.snippets', collections.relatedSnippets)
  // ❌ eleventyConfig.addCollection('sortByTitle', collections.sortByTitle)

  // Shortcodes
  eleventyConfig.addShortcode('tree', shortCodes.htmlList)
  // eleventyConfig.addShortcode('snippetLinks', shortCodes.snippetLinks)

  // Transforms
  eleventyConfig.addTransform('minify-html', transforms.minify)
  eleventyConfig.addDataExtension(transforms.yaml.exts, transforms.yaml.parse)

  // Events
  eleventyConfig.on('eleventy.before', events.before)
  eleventyConfig.on('eleventy.after', events.after)

  return {
    pathPrefix: utils.vars.basePath,
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [ 'md', 'njk', 'html', 'liquid' ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // These are all optional (defaults are shown):
    dir: {
      input: 'contents',
      data: '../config/data',
      layouts: '../config/layouts',
      includes: '../config/layouts',
      output: 'cheatsheets',
    }
  }
}
