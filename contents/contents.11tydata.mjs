export default {
  layout: 'post.njk',

  permalink: function ({ title, ...rest }) {
    // console.log({
    //   perma: `/code/tips${rest.page.filePathStem}`,
    // })

    return `/code/tips${rest.page.filePathStem}/`
  },
};
