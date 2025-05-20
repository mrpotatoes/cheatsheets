import snippetCatTree from '@tplfns/shortcodes/shortcode.snippet-cat-tree'
import head from '@tplfns/filters/head'
import toJSON from '@tplfns/filters/toJSON'
import urlize from '@tplfns/filters/urlize'
import catPath from '@tplfns/filters/catPath'
import markdown from '@tplfns/filters/markdown'
import titlecase from '@tplfns/filters/titlecase'

export const shortcodes = {
  snippetCatTree,
}

export const filters = {
  catPath,
  head,
  markdown,
  titlecase,
  toJSON,
  urlize,
}
