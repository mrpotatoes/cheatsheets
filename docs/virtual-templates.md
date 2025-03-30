# Virtual Templates
## Preface
I can create the category pages simply by using `11ty's` [Virtual Templates](https://www.11ty.dev/docs/virtual-templates/) api. Below is a quick example. 

### Example
```js
const tplOptions = (cat) => {
  layout: 'test.njk',
  title: cat.label,
  deets: cat.deets,
  permalink: cat.path,
}

const categoryPages = [{
  path: '/browser/css/',
  label: 'FOO',
  deets: 'Lorem ipsum dolor sit amet',
}]

categoryPages.forEach((cat) => {
  const catKey = cat.label.toLowerCase()
  eleventyConfig.addTemplate(`code/tips/${catKey}.njk`, '', tplOptions(cat))
})
```

## What's Next
There are a few things that I feel are my next steps when making the category pages.

- Rename the virtual template to `virtual.category.njk`
- Create an include to do this work
- Add needed `frontmatter` properties

## Links
- [Virtual Templates](https://www.11ty.dev/docs/virtual-templates/)
- [Permalinks → Use template syntax in Permalink](https://www.11ty.dev/docs/permalinks/#use-template-syntax-in-permalink)
