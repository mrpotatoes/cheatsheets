const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const md = require('./md')

module.exports = {
  syntaxHighlight,
  EleventyHtmlBasePlugin,
  md,
  htmlmin,
}
