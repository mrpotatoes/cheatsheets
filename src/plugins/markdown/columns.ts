import type Token from 'markdown-it/lib/token.mjs'
import type { Options } from 'markdown-it/lib/index.mjs'

export const spacer = (tokens: Token[], index: number, _options: Options) => '</div><hr />'

export const containerTitle = (tokens: Token[], index: number) => tokens[index].info.trim()

export const cols = {
  name: 'cols',
  openRender: (tokens: Token[], index: number, _options: Options) => `<div class="columns">`,
}

export const info = {
  name: 'info',
  openRender: (tokens: Token[], index: number, _options: Options) => `<div class="info"><p class="info-title">${containerTitle(tokens, index)}</p>`,
}

export const warning = {
  name: 'warning',
  openRender: (tokens: Token[], index: number, _options: Options) => `<div class="warning"><p class="warning-title">${containerTitle(tokens, index)}</p>`,
}
