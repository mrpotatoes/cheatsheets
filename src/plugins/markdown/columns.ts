import type Token from 'markdown-it/lib/token.mjs'
import type { Options } from 'markdown-it/lib/index.mjs'
import MarkdownIt from 'markdown-it'
import { container } from '@mdit/plugin-container'

export const spacer = (_tokens: Token[], _index: number, _options: Options) => '</div><hr />'

export const containerTitle = (tokens: Token[], index: number) => tokens[index].info.trim()

export const cols = (md: MarkdownIt) => {
  md.use(container, {
    name: 'info',
    openRender: (tokens: Token[], index: number, _options: Options) => `<div class="info"><p class="info-title">${containerTitle(tokens, index)}</p>`,
  })

  md.use(container, {
    name: 'warning',
    openRender: (tokens: Token[], index: number, _options: Options) => `<div class="warning"><p class="warning-title">${containerTitle(tokens, index)}</p>`,
  })

  md.use(container, {
    name: 'cols',
    openRender: (tokens: Token[], index: number, _options: Options) => `<div class="columns">`,
  })
}
