import markdownIt from 'markdown-it'
import path from 'path'
import markdownItEleventyImg from 'markdown-it-eleventy-img'

export default markdownIt({
  html: true,
  linkify: true
})
  .use(markdownItEleventyImg, {
    imgOptions: {
      widths: [1000, 800, 600],
      urlPath: '/assets/imgs/',
      outputDir: 'cheatsheets/assets/imgs',
      // formats: ['avif', 'webp', 'jpeg'],
    },
    globalAttributes: {
      class: 'markdown-image',
      decoding: 'async',
      sizes: '100vw', // If you use multiple widths don't forget to add a `sizes` attribute
    },

    // Literally from the example. I don't get it.
    resolvePath: (filepath, env) => path.join(path.dirname(env.page.inputPath), filepath)
  })
