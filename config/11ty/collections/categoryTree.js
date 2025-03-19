module.exports = (collectionApi) => {
  let cats = {}
  const all = collectionApi.getAll()
  // console.log(all.length)
  // console.log(Object.keys(all[2].data))
  // console.log('all[2].data', all[2].data)

  const urls = [
    '/sql/cli/',
    '/subsystem/bash/compress-images/',
  ]

  all.forEach(e => {
    // console.log('e.url', e.url)
    // if (e.page.url === urls[1]) {
    //   console.log({
    //     title: e.data.title,
    //     url: e.url,
    //     tags: e.data.tags,
    //     category: e.data.category,
    //     layout: e.data.layout,
    //   })

    //   console.log()
    // }

    cats = {
      ...cats,
      [e.url]: {
        title: e.data.title,
        url: e.url,
        tags: e.data.tags,
        category: e.data.category,
        layout: e.data.layout,
      },
    }
  })

  console.log('cats', cats)
  // console.log(Object.keys(cats))

  /**
   * Once these are all aggregated I want to then make a tree outta them.
   * 
   */

  return all
}
