import markdownIt from 'markdown-it'
// import markdownItEleventyImg from 'markdown-it-eleventy-img'
import collapsible from 'markdown-it-collapsible'

import { tab } from '@mdit/plugin-tab'
import { sup } from '@mdit/plugin-sup'
import { sub } from '@mdit/plugin-sub'
import { align } from '@mdit/plugin-align'
import { alert } from '@mdit/plugin-alert'
import { tasklist } from '@mdit/plugin-tasklist'
import { container } from '@mdit/plugin-container'
import { footnote } from '@mdit/plugin-footnote'
import { spoiler } from '@mdit/plugin-spoiler'

import myst from 'markdown-it-myst'

import { cols, info, warning } from '@plugins/markdown/columns'
import { carousel, caro } from '@plugins/markdown/carousel'
import { mdImages, plugin } from '@plugins/markdown/images'

const mditOpts = {
  html: true,
  linkify: true
}

const mdi = markdownIt(mditOpts)
  .use(alert, { deep: true })
  .use(sup)
  .use(sub)
  .use(align)
  .use(tab, { name: 'tabs' })
  .use(collapsible)
  .use(tasklist)
  .use(footnote)
  .use(myst)

  // TODO: This requires CSS & JS
  .use(spoiler)

  // Carosel -------------------------------------------------------------------
  .use(container, carousel)
  .use(container, caro)

  // Columns -------------------------------------------------------------------
  .use(container, cols)
  .use(container, info)
  .use(container, warning)

  // Images --------------------------------------------------------------------
  // .use(markdownItEleventyImg, mdImages)

plugin(mdi)

export default mdi
