// const fs = require('fs')
const markdownIt = require('markdown-it')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy")
const { execSync } = require('child_process')
const util = require('util')
const readline = require('readline')

module.exports = function (eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy({ './11ty/assets': 'assets' })

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addFilter('dumpy', obj => {
    return util.inspect(obj)
  })

  eleventyConfig.addFilter("debugger", (...args) => {
    // console.clear()
    // execSync("clear && printf '\e[3J'")

    console.log('-- DEBUGGER -------------------------------------')
    console.log('args', Object.keys(args[0]))
    // console.log('args', ...args)
    console.log('-------------------------------------------------\n')
    debugger
  })

  eleventyConfig.addFilter('urlize', (str) =>
    (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
  )

  eleventyConfig.addFilter("titlecase", (str) => {
    if ((str === null) || (str === ''))
      return false
    else
      str = str.toString()

    return str.replace(/\w\S*/g, (txt) => (
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ))
  })

  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    linkify: true
  }))

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return []
    }
    return (n < 0) ? array.slice(n) : array.slice(0, n)
  })

  eleventyConfig.addCollection('sortByTitle', function (collectionApi) {
    return collectionApi.getAll()
      .filter(function (item) {
        let extension = item.inputPath.split('.').pop()
        return extension === 'md'
      })
      .sort(function (a, b) {
        return a.data.title - b.data.title
      })
  })

  /**
   * - Matches up with the categories-tree.json
   * - Gets the parent directory and makes it a top-level category
   *    - Currently I have a type property. I would rather do it automatically
   *      and get it's info from the directory path.
   */
  eleventyConfig.addCollection('categories', function (collectionApi) {
    const categories = []

    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J")
    console.clear()
    
    // 'template',
    // 'data',
    // 'page',
    // 'inputPath',
    // 'fileSlug',
    // 'filePathStem',
    // 'date',
    // 'outputPath',
    // 'url',
    // 'templateContent',
    // 'content'
    // console.log(item.page.fileSlug)
    // const item = collectionApi.getAll()[0]

    collectionApi.getAll()
      .filter(function (item) {        
        const categoryParts = item.inputPath.replace('./contents/', '').split('/')
        const categoryPath = categoryParts.splice(0, categoryParts.length - 1).join('/')

        // console.log(Object.keys(item))
        console.log('url →', item.url)
        console.log('categoryPath →', categoryPath)
        console.log('category →', item.data.category)
        console.log('fileSlug →', item.page.fileSlug)
        console.log('parsed.dir →', item.template.parsed.dir)
        console.log('-------------------------------------------------\n')

        return item.inputPath.split('.').pop() === 'md'
      })
      .forEach((item) => {
        const category = item.data.category
      
        if (category && !categories.includes(category)) {
          categories.push(category)
        }
      })

    return categories.sort()
  })

  eleventyConfig.addCollection('groupByCategories', function (collectionApi) {
    const categories = {}

    // console.log(collectionApi)
    collectionApi.getAll()
      .filter(function (item) {
        let extension = item.inputPath.split('.').pop()
        return extension === 'md'
      })
      .forEach((item) => {
        const category = item.data.category
        if (!category) {
          return
        }
        Array.isArray(categories[category])
          ? categories[category].push(item)
          : categories[category] = [item]
      })
    return categories
  })

  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })

  eleventyConfig.addTransform('minify-html', function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }
    return content
  })

  const path = process.env.NODE_ENV == undefined ? '/cheatsheets/' : '/'

  return {
    pathPrefix: path,

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
      output: 'cheatsheets',
      data: '../11ty/config',
      layouts: '../11ty/layouts',
    }
  }
}
