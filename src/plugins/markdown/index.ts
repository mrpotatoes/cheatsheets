
import collapsible from 'markdown-it-collapsible'

import { tab } from '@mdit/plugin-tab'
import { sup } from '@mdit/plugin-sup'
import { sub } from '@mdit/plugin-sub'
import { align } from '@mdit/plugin-align'
import { alert } from '@mdit/plugin-alert'
import { spoiler } from '@mdit/plugin-spoiler'
import { tasklist } from '@mdit/plugin-tasklist'
import { footnote } from '@mdit/plugin-footnote'

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
