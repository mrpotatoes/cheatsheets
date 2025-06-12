import { EleventyConfig } from '@mytypes/11ty'
import tailwindcss from 'eleventy-plugin-tailwindcss-4'

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
  eleventyConfig.addPlugin(tailwindcss, {
      input: '../src/theme/styles/tailwind.css',
      output: 'styles/index.min.css',

      // TODO: Set these via env variables.
      // debug: true,
      // minify: true,
    })
}
