import path from 'path'
import markdownIt from 'markdown-it'
import markdownItEleventyImg from 'markdown-it-eleventy-img'
import { outputDir, workingDir } from '@utils/variables'

export const mdImages = {
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
}

// @ts-ignorde
export const plugin = (md: markdownIt): markdownIt => {
  md.use(markdownItEleventyImg, mdImages)
  return md
}
