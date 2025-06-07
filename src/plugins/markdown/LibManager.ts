import { PluginFn } from '@mytypes/plugins'
import markdownIt from 'markdown-it'
import type MarkdownIt from 'markdown-it'

export class LibManager {
  #mdit: MarkdownIt

  constructor(mditOpts: {}) {
    this.#mdit = markdownIt(mditOpts)
  }

  get mdit() {
    return this.#mdit
  }

  // Add simple plugin
  plugin(plg: MarkdownIt.PluginSimple, opts = {}) {
    this.#mdit.use(plg, opts)
    return this
  }

  // Add in a custom plugin
  custom(fn: PluginFn) {
    fn(this.#mdit)
    return this
  }
}
