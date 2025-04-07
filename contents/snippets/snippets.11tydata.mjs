import utils from '../../config/utils/index.mjs'

export default {
  layout: 'snippet.njk',
  tags: 'snippets',
  permalink: ({ title, ...rest }) => utils.urls.snippet(rest.page),
}
