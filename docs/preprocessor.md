# `addPreprocessor()`

I wanted to save this for the future.
```js
  eleventyConfig.addPreprocessor('drafts2', drafts.exts, (data: any, content: string) => {
    if (data.draft) {
      console.log(JSON.stringify(data.eleventy))
      // console.log(Object.keys(data))
      // console.log(Object.keys(data.snippetsCategories))
      // console.log(Object.keys(data.snippetsGrouped))
      // console.log(Object.keys(data.snippetBase))
      // console.log(Object.keys(data.basePath))
      // console.log(Object.keys(data.eleventy))
      // console.log(Object.keys(data.pkg))
      // console.log(Object.keys(data.draft))
      // console.log(Object.keys(data.layout))
      // console.log(Object.keys(data.page))
      // console.log(Object.keys(data.collections))

      process.exit()
    }
  })
```
