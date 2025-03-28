import markdownIt from 'markdown-it'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import htmlmin from 'html-minifier'
import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import util from 'util'

export default function (eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy({ './config/assets': 'assets' });
  // eleventyConfig.addPassthroughCopy({ './config/styles': 'styles' });
  // eleventyConfig.addGlobalData("myDate", () => new Date());

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addFilter('dumpy', obj => {
    return util.inspect(obj)
  });

  eleventyConfig.addFilter("debugger", (...args) => {
    // console.clear()
    // execSync("clear && printf '\e[3J'")

    console.log('-- DEBUGGER -------------------------------------')
    console.log('args', args[0])
    // console.log('args', ...args)
    console.log('-------------------------------------------------\n')
    debugger;
  });

  eleventyConfig.addFilter('urlize', (str) =>
    (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
  )

  eleventyConfig.addFilter("titlecase", (str) => {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();

    return str.replace(/\w\S*/g, (txt) => (
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ));
  });

  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    linkify: true
  }));

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    return (n < 0) ? array.slice(n) : array.slice(0, n);
  });

  eleventyConfig.addCollection('sortByTitle', function (collectionApi) {
    return collectionApi.getAll()
      .filter(function (item) {
        let extension = item.inputPath.split('.').pop();
        return extension === 'md';
      })
      .sort(function (a, b) {
        return a.data.title - b.data.title;
      });
  });

  eleventyConfig.addCollection('categories', function (collectionApi) {
    const categories = [];
    collectionApi.getAll()
      .filter(function (item) {
        let extension = item.inputPath.split('.').pop();
        return extension === 'md';
      })
      .forEach((item) => {
        const category = item.data.category;
        if (category && !categories.includes(category)) {
          categories.push(category);
        }
      });
    return categories.sort();
  });

  eleventyConfig.addCollection('groupByCategories', function (collectionApi) {
    const categories = {};

    // console.log(collectionApi)
    collectionApi.getAll()
      .filter(function (item) {
        let extension = item.inputPath.split('.').pop();
        return extension === 'md';
      })
      .forEach((item) => {
        const category = item.data.category;
        if (!category) {
          return;
        }
        Array.isArray(categories[category])
          ? categories[category].push(item)
          : categories[category] = [item];
      });
    return categories;
  });

  eleventyConfig.on('eleventy.after', () => {
    // execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })

  // eleventyConfig.addTransform('minify-html', function (content) {
  //   if (this.outputPath && this.outputPath.endsWith('.html')) {
  //     return htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true
  //     })
  //   }
  //   return content
  // })

  // Not sure what is going on here with the prod version and local builds
  const path = process.env.NODE_ENV == undefined ? '/' : '/cheatsheets'

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
      layouts: '../config/layouts',
      output: 'cheatsheets',
    }
  }
}
