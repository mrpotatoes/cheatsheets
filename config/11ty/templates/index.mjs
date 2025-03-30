import utils from '../../utils/index.mjs'

/**
 * Documentation
 *  - https://www.11ty.dev/docs/virtual-templates/
 *  - https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink
 */
const virtualTemplates = (eleventyConfig) => {
  const cats = utils.categories('categories.yml')

  eleventyConfig.addTemplate(
    `code/tips/index.njk`, // This doesn't matter if nothing
    '', // The content to print but I have my own already.
    {
      layout: 'test.njk',
      title: 'Snippets',
      desc: '',
      permalink: `/code/tips/`,
      cats: Object.keys(cats).map(e => ({
        url: e,
        title: cats[e].name,
        desc: cats[e].desc,
      })),
      crumbs: [],
    }
  )

  Object.keys(cats).forEach((cat) => {
    eleventyConfig.addTemplate(
      `code/tips/${cat}.njk`, // This doesn't matter if nothing
      '', // The content to print but I have my own already.
      {
        layout: 'test.njk',
        title: cats[cat].name,
        desc: cats[cat].desc,
        permalink: `/code/tips/${cat}/`,
        cats: cats,
        crumbs: utils.breadcrumbs(cats, cat),
      }
    )
  })
}

export default {
  virtualTemplates,
}

