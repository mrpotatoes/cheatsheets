import { snippetPermalink } from '@utils/urls'

export default {
  layout: 'snippet.njk',
  tags: 'snippets',
  permalink: ({ title, ...rest }) => snippetPermalink(rest.page),
}
