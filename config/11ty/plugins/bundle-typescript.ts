// @ts-nocheck
import esbuild from 'esbuild'
import path from 'node:path'

export const jsConfig = eleventyConfig => {
  eleventyConfig.addTemplateFormats('ts')

  eleventyConfig.addExtension('ts', {
    outputFileExtension: 'js',

    compile: async (content, inputPath) => async () => {
      console.log(inputPath)

      let output = await esbuild.build({
        target: 'es2020',
        entryPoints: [inputPath],
        bundle: true,

        // TODO: Check if in debug mode or not
        // TODO: Add source maps
        minify: true,
        write: false
      })

      return output.outputFiles[0].text
    }
  })

  // From eleventy-excellent: https://github.com/madrilene/eleventy-excellent/blob/main/src/_config/plugins/js-config.js
  // eleventyConfig.addExtension('js', {
  //   outputFileExtension: 'js',

  //   compile: async (content, inputPath) => {
  //     console.log(inputPath)
  //     // Skip processing if not in the designated scripts directories
  //     // if (!inputPath.startsWith('./src/assets/scripts/')) {
  //     //   return
  //     // }

  //     return content

  //     // Inline scripts processing
  //     if (inputPath.startsWith('./src/assets/scripts/bundle/')) {
  //       const filename = path.basename(inputPath)
  //       const outputFilename = filename
  //       const outputPath = `./src/_includes/scripts/${outputFilename}`

  //       await esbuild.build({
  //         target: 'es2020',
  //         entryPoints: [inputPath],
  //         outfile: outputPath,
  //         bundle: true,
  //         minify: true
  //       })
  //       return
  //     }

  //     // Default handling for other scripts, excluding inline scripts
  //     return async () => {
  //       let output = await esbuild.build({
  //         target: 'es2020',
  //         entryPoints: [inputPath],
  //         bundle: true,
  //         minify: true,
  //         write: false
  //       })

  //       return output.outputFiles[0].text
  //     }
  //   }
  // })
}
