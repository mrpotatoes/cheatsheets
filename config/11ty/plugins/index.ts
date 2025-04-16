import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import htmlmin from 'html-minifier'
import md from './md'

export default {
  syntaxHighlight,
  EleventyHtmlBasePlugin,
  md,
  htmlmin,
}
