export default {
  layout: 'post.njk',

  permalink: ({ title, ...rest }) => `/code/tips${rest.page.filePathStem}/`
}
