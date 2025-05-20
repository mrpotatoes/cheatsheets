import esbuild from 'esbuild'
import { basePath, isDev } from '@utils/variables'
import { EleventyConfig } from '@mytypes/11ty'
import { snippetBasePath } from '@utils/urls'

/**
 * TODO: Fix the minify code
 * TODO: path variable, maybe use a function so I don't have to do what I'm doing?
 * TODO: See if sourcemaps are possible
 *
 * @see eleventy-excellent: https://github.com/madrilene/eleventy-excellent/blob/main/src/_config/plugins/js-config.js
 *
 * @param eleventyConfig
 */
export default (eleventyConfig: EleventyConfig) => {
  eleventyConfig.addTemplateFormats('ts')

  eleventyConfig.addExtension('ts', {
    outputFileExtension: 'js',

    compile: async (content: string, inputPath: string) => async () => {
      const output = await esbuild.build({
        target: 'es2020',
        entryPoints: [inputPath],
        bundle: true,
        platform: 'browser',
        banner: {
          js: `var path = "${basePath()}"; var base = "${snippetBasePath()}"`
        },

        // TODO: Add source maps
        minify: !isDev(),
        write: false,
      })

      return output.outputFiles[0].text
    }
  })
}
