import utils from '@utils'

export default {
  layout: 'snippet.njk',
  tags: 'snippets',
  permalink: ({ title, ...rest }) => utils.urls.snippet(rest.page),
}
