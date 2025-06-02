import path from 'path'
import markdownIt from 'markdown-it'
import { align } from '@mdit/plugin-align'
import { container } from '@mdit/plugin-container'
import { tab } from '@mdit/plugin-tab'
import { sup } from '@mdit/plugin-sup'
import { sub } from '@mdit/plugin-sub'

import markdownItEleventyImg from 'markdown-it-eleventy-img'
import { outputDir, workingDir } from '@utils/variables'

// Types
import type Token from 'markdown-it/lib/token.mjs'
import type { Options } from 'markdown-it/lib/index.mjs'

export const spacer = (tokens: Token[], index: number, _options: Options) => '</div><hr />'

export const containerTitle = (tokens: Token[], index: number) => tokens[index].info.trim()

export default markdownIt({
  html: true,
  linkify: true
})
  .use(sup)
  .use(sub)
  .use(align)
  .use(tab, { name: 'tabs' })

  // Carosel -------------------------------------------------------------------
  /**
   * @see https://www.w3schools.com/howto/howto_js_slideshow.asp
   */
  .use(container, {
    name: 'carousel',
    openRender: (tokens, index, _options) => `<div class="slideshow-container">`,
  })

  .use(container, {
    name: 'caro',
    openRender: (tokens, index, _options) => `<div class="carosel-item">`,
  })

  // Columns -------------------------------------------------------------------
  .use(container, {
    name: 'cols',
    openRender: (tokens, index, _options) => `<div class="columns">`,
  })

  .use(container, {
    name: 'info',
    openRender: (tokens, index, _options) => `<div class="info"><p class="info-title">${containerTitle(tokens, index)}</p>`,
  })

  .use(container, {
    name: 'warning',
    openRender: (tokens, index, _options) => `<div class="warning"><p class="warning-title">${containerTitle(tokens, index)}</p>`,
  })

  // Images --------------------------------------------------------------------
  .use(markdownItEleventyImg, {
    imgOptions: {
      widths: [1000, 800, 600],
      urlPath: '/assets/imgs/',
      outputDir: path.join(outputDir(), '/assets/imgs'),
      // formats: ['avif', 'webp', 'jpeg'],
    },
    globalAttributes: {
      class: 'markdown-image',
      decoding: 'async',
      sizes: '100vw',
    },

    resolvePath: (filepath: string, env: any) =>
      (filepath.charAt(0) === '/')
        ? path.join(workingDir(), 'config/', filepath)
        : path.join(path.dirname(env.page.inputPath), filepath),
  })
