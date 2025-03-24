console.clear()

const _ = require('lodash')

const filters = require('./filters')
const collections = require('./collections')
const events = require('./events')
const plugins = require('./plugins')
const transforms = require('./transforms')
const { passthroughs, basePath, targets } = require('./variables')

module.exports = function (eleventyConfig) {
  console.clear()
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

  eleventyConfig.addFilter("debug", (content) => JSON.stringify(content, null, 2)) //`<pre>${JSON.stringify(content, null, 2)}</pre>`)
  
  const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')
  
  const category = (str) => {
    const trimmed = trimSlashes(str).split('/')
    const paths = trimmed.slice(0, trimmed.length - 1)
    return paths
  }

  /**
   * A category tree that is used to create the category + snippet pages
   * 
   * Main Page
   *  - Top-level categories
   * 
   * Category Page
   *  - Featured image
   *  - Description of category
   *  - Child categories & Related
   *    - Perhaps as a tree underneath description
   *  - Snippets
   *    - Summarized description
   *    - ? Icon
   *    - ? Related snippet tags
   * 
   * Snippet Page
   *  - Breadcrumbs
   *  - Full description
   *  - Content
   *  - Related snippets
   *  - ? Related blog posts
   */
  eleventyConfig.addCollection('catTree', (collectionApi) => {
    const all = collectionApi.getAll()
    const item = all[0]

    // console.log(item.data.breadcrumbs)
    const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '')
    const setPath = trimSlashes(item.page.filePathStem).replaceAll('/', '.')

    // console.log('\n')
    // console.log({
    //   data: Object.keys(item.data),
    //   // page: item.data,
    //   // path: setPath,
    //   // file: item.data.page.inputPath,
    //   // category: item.data.category,
    //   // categories: item.data.categories,
    //   // collections: item.data.collections,
    //   // rest: Object.keys(item.data.collections)
    // })
    // console.log('\n')
    
    _.set(item.data.breadcrumbs, setPath, {
      label: item.data.title,
      category: item.data.category,
    })

    // console.log(item.data.breadcrumbs)

    // all.forEach(e => {
    //   console.log(e.data.page.inputPath)
    // })

    return item.data.breadcrumbs
  })

  eleventyConfig.addCollection('breadcrumbs', (collectionApi) => {
    let cats = {}
    const all = collectionApi.getAll()
    
    const urls = [
      '/sql/cli/',
      '/subsystem/bash/compress-images/',
    ]

    all.forEach(e => {
      if (e.page.url === urls[1]) {
        const paths = category(e.url)        

        // console.log({
        //   title: e.data.title,
        //   category: e.data.category,
        //   url: e.url,
        //   breadcrumb: e.data.breadcrumbs,
        //   // paths: paths,
        //   // tags: e.data.tags,
        //   // layout: e.data.layout,
        // })
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
  })

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
      output: 'cheatsheets',
    }
  };
};
