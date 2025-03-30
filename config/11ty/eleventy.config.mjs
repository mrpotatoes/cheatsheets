console.clear()

import _ from 'lodash'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import yaml from 'js-yaml'

import filters from './filters/index.mjs'
import collections from './collections/index.mjs'
import events from './events/index.mjs'
import plugins from './plugins/index.mjs'
import transforms from './transforms/index.mjs'
import utils from '../utils/index.mjs'
import tpls from './templates/index.mjs'

import { passthroughs, basePath, targets } from './variables/index.mjs'

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension('yml, yaml', (contents) => yaml.load(contents))

  // Virtual Templates
  tpls.virtualTemplates(eleventyConfig)

  eleventyConfig.addWatchTarget(targets('collections'), { resetConfig: true })
  // eleventyConfig.addWatchTarget(path.join(__dirname, 'collections'), { resetConfig: true })

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy(passthroughs.assets)
  // eleventyConfig.addPassthroughCopy(passthroughs.styles)

  // Filters
  eleventyConfig.addFilter('dumpy', filters.dumpy)
  eleventyConfig.addFilter('urlize', filters.urlize)
  eleventyConfig.addFilter('titlecase', filters.titlecase)
  eleventyConfig.addFilter('head', filters.head)
  eleventyConfig.addFilter('debugger', filters.debuggerme)

  // Some test to add global data
  // eleventyConfig.addGlobalData("myDate", () => new Date())

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)

  eleventyConfig.addCollection('categories', collections.categories)
  eleventyConfig.addCollection('sortByTitle', collections.sortByTitle)
  eleventyConfig.addCollection('groupByCategories', collections.groupByCategories)
  eleventyConfig.addCollection('breadcrumbs', collections.breadcrumbs)
  // eleventyConfig.addCollection('categoryTree', collections.categoryTree)

  eleventyConfig.addFilter('debug', filters.debugFilter)

  // Transforms
  eleventyConfig.addTransform('minify-html', transforms.minify)

  // Events
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
      data: '../config/11ty/data',
      layouts: '../config/layouts',
      includes: '../config/layouts',
      output: 'cheatsheets',
    }
  }
}
