import { VentoPlugin } from 'eleventy-plugin-vento'
import { EleventyConfig } from '@mytypes/11ty'

/**
 * @see https://vento.js.org/syntax/include/
 * @see https://github.com/noelforte/eleventy-plugin-vento
 */
export default (eleventyConfig: EleventyConfig) => {
  eleventyConfig.addPlugin(VentoPlugin, {
    // Some cool options here, yo.
    // shortcodes: true,
    // pairedShortcodes: true,
    // filters: true,
  })
}
