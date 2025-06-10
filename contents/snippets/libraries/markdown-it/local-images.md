---
title: Local Images
---
## About
Setting up `markdown-it-eleventy-img`

## Code
```ts
import path from 'path'
import MarkdownIt from 'markdown-it'
import markdownItEleventyImg from 'markdown-it-eleventy-img'
import { outputDir, workingDir } from '@utils/variables'
import { EleventyEnv } from '@mytypes/11ty'

/**
 *
 * @param md
 */
export const imgs = (md: MarkdownIt) => {
  md.use(markdownItEleventyImg, {
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

    resolvePath: (filepath: string, env: EleventyEnv) =>
      (filepath.charAt(0) === '/')
        ? path.join(workingDir(), 'config/', filepath)
        : path.join(path.dirname(env.page.inputPath), filepath),
  })
}
```
