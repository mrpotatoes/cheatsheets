import markdownIt from 'markdown-it'
import path from 'path'
import markdownItEleventyImg from 'markdown-it-eleventy-img'
import { outputDir, workingDir } from '@utils/variables'

export default markdownIt({
  html: true,
  linkify: true
})
  .use(markdownItEleventyImg, {
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
        ? path.join(workingDir(), 'src/', filepath)
        : path.join(path.dirname(env.page.inputPath), filepath)
  })
