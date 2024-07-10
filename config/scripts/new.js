console.clear()
const nunjucks = require('nunjucks')
const path = require('path')
const templates = require('./templates')
const { existsSync, mkdirSync, writeFileSync } = require('fs')

if (process.argv.length <= 2 || process.argv.length === 2) {
  console.log(templates.help)
  process.exit(1);
}

const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
const category = process.argv[2]
const catDir = path.join(__dirname, '../contents/', category.toLowerCase())
const title = process.argv[3] ? process.argv[3] : 'Placeholder'
const indexFile = path.join(catDir, 'index') + '.njk'
const postFile = path.join(catDir, slugify(title)) + '.md'

// Run templates
const vars = {
  category: capitalize(category),
  postTitle: title,
}

const index = nunjucks.renderString(templates.category, vars)
const cheetsheet = nunjucks.renderString(templates.post, vars)

// Create folder
if (!existsSync(catDir)) {
  mkdirSync(catDir);
}

writeFileSync(indexFile, index)
writeFileSync(postFile, cheetsheet)
