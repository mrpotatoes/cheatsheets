console.clear()

const filters = require('./filters')
const collections = require('./collections')
const events = require('./events')
const plugins = require('./plugins')
const transforms = require('./transforms')
const { passthroughs, basePath, targets } = require('./variables')

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget(targets('collections'), { resetConfig: true })

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy(passthroughs.assets)
  // eleventyConfig.addPassthroughCopy(passthroughs.styles)

  // Filters
  eleventyConfig.addFilter('dumpy', filters.dumpy)
  eleventyConfig.addFilter('urlize', filters.urlize)
  eleventyConfig.addFilter('titlecase', filters.titlecase)
  eleventyConfig.addFilter('head', filters.head)
  eleventyConfig.addFilter('debugger', filters.debuggerme)

  // Libraries & Plugins
  eleventyConfig.setLibrary('md', plugins.md)
  eleventyConfig.addPlugin(plugins.syntaxHighlight)
  eleventyConfig.addPlugin(plugins.EleventyHtmlBasePlugin)

  // Categories
  eleventyConfig.addCollection('categories', collections.categories)
  eleventyConfig.addCollection('sortByTitle', collections.sortByTitle)
  eleventyConfig.addCollection('groupByCategories', collections.groupByCategories)
  // eleventyConfig.addCollection('categoryTree', collections.categoryTree)
  
  const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')
  
  const category = (str) => {
    const trimmed = trimSlashes(str).split('/')
    const paths = trimmed.slice(0, trimmed.length - 1)
    return paths
  }
  
  const breadcrumb = 'asd'

  const categories = {
    [breadcrumb]: {
      label: '',
      url: '',
    }
  }

  eleventyConfig.addCollection('categoryTree', (collectionApi) => {
    let cats = {}
    const all = collectionApi.getAll()

    const urls = [
      '/sql/cli/',
      '/subsystem/bash/compress-images/',
    ]

    all.forEach(e => {
      if (e.page.url === urls[1]) {
        const paths = category(e.url)        

        console.log({
          paths: paths,
          title: e.data.title,
          url: e.url,
          tags: e.data.tags,
          category: e.data.category,
          // layout: e.data.layout,
        })
      }

      cats = {
        ...cats,
        [trimSlashes(e.url)]: {
          title: e.data.title,
          category: e.data.category,
          // url: trimSlashes(e.url),
          // tags: e.data.tags,
          // layout: e.data.layout,
        },
      }
    })

    return all
  }
)

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
      layouts: '../config/layouts',
      output: 'cheatsheets',
    }
  };
};
