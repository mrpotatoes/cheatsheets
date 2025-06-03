
import markdownIt from 'markdown-it'
import markdownItEleventyImg from 'markdown-it-eleventy-img'

import { align } from '@mdit/plugin-align'
import { container } from '@mdit/plugin-container'
import { tab } from '@mdit/plugin-tab'
import { sup } from '@mdit/plugin-sup'
import { sub } from '@mdit/plugin-sub'
import { alert } from '@mdit/plugin-alert'

import { cols, info, warning } from '@plugins/markdown/columns'
import { carousel, caro } from '@plugins/markdown/carousel'
import { mdImages } from '@plugins/markdown/images'

const mditOpts = {
  html: true,
  linkify: true
}

export default markdownIt(mditOpts)
  .use(alert, { deep: true })
  .use(sup)
  .use(sub)
  .use(align)
  .use(tab, { name: 'tabs' })

  // Carosel -------------------------------------------------------------------
  .use(container, carousel)
  .use(container, caro)

  // Columns -------------------------------------------------------------------
  .use(container, cols)
  .use(container, info)
  .use(container, warning)

  // Images --------------------------------------------------------------------
  .use(markdownItEleventyImg, mdImages)
