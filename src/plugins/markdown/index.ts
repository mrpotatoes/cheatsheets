import markdownIt from 'markdown-it'
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

export default markdownIt({ html: true, linkify: true })
  .use(tab, { name: 'tabs' })
  .use(alert, { deep: true })
  .use(sup)
  .use(sub)
  .use(align)
  .use(collapsible)
  .use(tasklist)
  .use(footnote)
  .use(spoiler) // TODO: This requires CSS & JS
  .use(cols)
  .use(imgs)
