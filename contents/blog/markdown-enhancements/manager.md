---
title: Enhancement - Manager
layout: post.vto
---

```ts
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
```

```ts
import { tab } from '@mdit/plugin-tab'
import { sup } from '@mdit/plugin-sup'
import { sub } from '@mdit/plugin-sub'
import { align } from '@mdit/plugin-align'
import { alert } from '@mdit/plugin-alert'
import { spoiler } from '@mdit/plugin-spoiler'
import { tasklist } from '@mdit/plugin-tasklist'
import { footnote } from '@mdit/plugin-footnote'
import collapsible from 'markdown-it-collapsible'

import { imgs } from '@plugins/markdown/images'
import { cols } from '@plugins/markdown/columns'
import { LibManager } from '@plugins/markdown/LibManager'

export default new LibManager({ html: true, linkify: true })
  .plugin(tab, { name: 'tabs' })
  .plugin(alert, { deep: true })
  .plugin(sup)
  .plugin(sub)
  .plugin(align)
  .plugin(collapsible)
  .plugin(tasklist)
  .plugin(footnote)
  .plugin(spoiler) // TODO: This requires CSS & JS

  .custom(cols)
  .custom(imgs)
  // .custom(carosel)

  // Return markdown-it to be set as a plugin/library
  .mdit

```
