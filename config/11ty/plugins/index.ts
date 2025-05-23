import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

import md from '@plugins/md'
import groups from '@plugins/groups'
import categoryBase from '@plugins/category.base'
import jsConfig from '@plugins/bundle-typescript'
import categoryChildren from '@plugins/category.children'

export default {
  syntaxHighlight,
  EleventyHtmlBasePlugin,

  md,
  groups,
  jsConfig,
  categoryBase,
  categoryChildren,
}
