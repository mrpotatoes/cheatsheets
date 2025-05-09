import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import htmlmin from 'html-minifier'
import md from './md'
import { jsConfig } from '@plugins/bundle-typescript'

export default {
  syntaxHighlight,
  EleventyHtmlBasePlugin,
  md,
  htmlmin,
  jsConfig,
}
