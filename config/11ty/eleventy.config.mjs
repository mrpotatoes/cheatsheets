console.clear()

import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import yaml from 'js-yaml'
import collections from './collections/index.mjs'
import events from './events/index.mjs'
import filters from './filters/index.mjs'
import plugins from './plugins/index.mjs'
import tpls from './templates/index.mjs'
import transforms from './transforms/index.mjs'
import shortCodes from './shortcodes/index.mjs'
import { basePath, passthroughs, targets } from './variables/index.mjs'

export default (eleventyConfig) => {
  // Some test to add global data
  // eleventyConfig.addGlobalData('globalData', () => new Date())

  // Allow yaml data
  eleventyConfig.addDataExtension('yml, yaml', (contents) => yaml.load(contents))

  // Virtual Templates
  tpls.virtualTemplates(eleventyConfig)

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy(passthroughs.assets)
  // eleventyConfig.addPassthroughCopy(passthroughs.styles)

  // Filters
  // eleventyConfig.addFilter('dumpy', filters.dumpy)
  eleventyConfig.addFilter('urlize', filters.urlize)
  eleventyConfig.addFilter('titlecase', filters.titlecase)
  eleventyConfig.addFilter('head', filters.head)
  // eleventyConfig.addFilter('debugger', filters.debuggerme)
  eleventyConfig.addFilter('debug', filters.debugFilter)
  eleventyConfig.addFilter('cat', filters.catPath)

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)

  // Collections
  eleventyConfig.addCollection('snippets', collections.snippets)
  eleventyConfig.addCollection('groupedSnippets', collections.snippetsGrouped)
  eleventyConfig.addCollection('crumbs', collections.breadcrumbs)

  // ✅ eleventyConfig.addCollection('categories', collections.categories)
  // ❌ eleventyConfig.addCollection('sortByTitle', collections.sortByTitle)

  // Shortcodes
  eleventyConfig.addShortcode('tree', shortCodes.htmlList)  
  eleventyConfig.addShortcode('snippetLinks', shortCodes.snippetLinks)

  // Transforms
  eleventyConfig.addTransform('minify-html', transforms.minify)

  // Events
  eleventyConfig.on('eleventy.before', events.before)
  eleventyConfig.on('eleventy.after', events.after)

  return {
    pathPrefix: basePath,
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
