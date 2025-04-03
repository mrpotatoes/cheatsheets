export default {
  layout: 'post.njk',
  tags: 'snippets',

  permalink: ({ title, ...rest }) => `/code/tips${rest.page.filePathStem}/`
}
