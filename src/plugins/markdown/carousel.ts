/**
 * @see https://www.w3schools.com/howto/howto_js_slideshow.asp
 */
import type Token from 'markdown-it/lib/token.mjs'
import type { Options } from 'markdown-it/lib/index.mjs'

export const carousel = {
  name: 'carousel',
  openRender: (tokens: Token[], index: number, _options: Options) => `<div class="slideshow-container">`,
}

export const caro = {
  name: 'caro',
  openRender: (tokens: Token[], index: number, _options: Options) => `<div class="carosel-item">`,
}
