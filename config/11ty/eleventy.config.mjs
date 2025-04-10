console.clear()

import yaml from 'js-yaml'
import _ from 'lodash'
import collections from './collections/index.mjs'
import events from './events/index.mjs'
import filters from './filters/index.mjs'
import plugins from './plugins/index.mjs'
import tpls from './templates/index.mjs'
import transforms from './transforms/index.mjs'
import shortCodes from './shortcodes/index.mjs'
import utils from '../utils/index.mjs'

export default (eleventyConfig) => {
  // Allow yaml data
  eleventyConfig.addDataExtension('yml, yaml', (contents) => yaml.load(contents))

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
  eleventyConfig.addFilter('head', filters.head)
  eleventyConfig.addFilter('debug', filters.debugFilter)
  eleventyConfig.addFilter('cat', filters.catPath)
  eleventyConfig.addFilter('md', filters.markdown)

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)

  // Collections
  eleventyConfig.addCollection('groupedSnippets', collections.snippetsGrouped)
  eleventyConfig.addCollection('crumbs', collections.breadcrumbs)
  // ✅ eleventyConfig.addCollection('related.snippets', collections.relatedSnippets)
  // ❌ eleventyConfig.addCollection('sortByTitle', collections.sortByTitle)

  /**
   * Process:
   *
   * - Get categories object
   * - Generate a unique url
   *    - category + group
   * - Save to a URLs object
   * - Save this object to a file in the after event
   * - Once those URLs are created I create virtual templates based on that
   *
   * Example URL
   *  - /code/tips/languages/javascript/strings/retrivals/
   */
  eleventyConfig.addCollection('groupedUrls', (collectionApi) => {
    const snippets = collectionApi.getFilteredByTag('snippets')
    const urls = {}

    snippets.forEach((snip) => {
      // The group needs to be lowercased + slugified
      const group = (snip.data.group || 'other').toLowerCase()
      const catUrl = utils.categories.normalPath(snip)

      // Use set here instead
      if (!urls[`${catUrl}${group}`]) {
        urls[`${catUrl}${group}`] = []
      }

      urls[`${catUrl}${group}`].push({
        title: snip.data.title,
        url: snip.page.url,
      })
    })

    // console.log(urls['languages/javascript/strings/sorting'][0])

    return urls
  })

  // Shortcodes
  eleventyConfig.addShortcode('tree', shortCodes.htmlList)
  eleventyConfig.addShortcode('snippetLinks', shortCodes.snippetLinks)

  // Transforms
  eleventyConfig.addTransform('minify-html', transforms.minify)

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
