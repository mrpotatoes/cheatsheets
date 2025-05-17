import htmlmin from 'html-minifier-terser'
import { isDev } from '@utils/variables'
import { EleventyScope } from '@mytypes/11ty'

export const minify = (content: string): Promise<string> =>
  htmlmin.minify(content, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
  })

  // https://www.11ty.dev/docs/transforms/
export default async function (this: EleventyScope, content: string): Promise<string> {
  return (!isDev() && (this.page.outputPath || '').endsWith('.html'))
    ? await minify(content)
    : content
}
