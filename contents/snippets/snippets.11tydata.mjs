export default {
  layout: 'snippet.njk',
  tags: 'snippets',

  permalink: ({ title, ...rest }) => `/code/tips${rest.page.filePathStem}/`
}
