// @ts-ignore TODO: Create module if types no exist
import htmlmin from 'html-minifier-terser'
import { isDev } from '@utils/variables'

export const minify = (content: string): string =>
  htmlmin.minify(content, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
  })

  // https://www.11ty.dev/docs/transforms/
export default function (content: string): string {
  return (!isDev() && (this.page.outputPath || '').endsWith('.html'))
    ? minify(content)
    : content
}
