import { snippetPermalink } from '@utils/urls'

export default {
  layout: 'snippet.vto',
  tags: 'snippets',
  permalink: ({ title, ...rest }) => snippetPermalink(rest.page),
}
