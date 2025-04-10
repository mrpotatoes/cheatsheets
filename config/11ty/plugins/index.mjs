import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import htmlmin from 'html-minifier'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import md from './md.mjs'

export default {
  syntaxHighlight,
  EleventyHtmlBasePlugin,
  md,
  htmlmin,
}
