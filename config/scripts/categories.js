/**
 * HOW
 *  - Goes through dir recursively
 *  - Directories with a dirr.json file are saved to an object (valid cat data)
 *  - Invalid directories are saved to a noConfig variable (rename)
 *  - Use current path to find all breadcrumbs
 *  - Breadcrumbs do not include the first item (./contents)
 * 
 * TODO
 *  - Remove the base directory (ie: contents/)
 *  - Write to a file (the cache)
 *  - Rename functions & variables
 *  - Create script to run from commandline
 *  - Create breadcrumb links
 *  - Run in template
 * 
 * 
 * ???
 *  - Categories structure ...
 */

const fs = require('fs')
const path = require('path')
console.clear()

const directories = (directory) => {
  let results = {}
  let noConfig = []

  const traverse = (currentDir) => {
    const files = fs.readdirSync(currentDir)

    for (const file of files) {
      const fullPath = path.join(currentDir, file)
      const stat = fs.statSync(fullPath)
      const split = file.split('/')
      const dataFile = `${fullPath}/${split[0]}.json`

      if (stat.isDirectory()) {
        if (fs.existsSync(dataFile)) {
          const json = fs.readFileSync(dataFile, (err, data) => {
            if (err) throw err;
          })

          const cont = JSON.parse(json)

          results = {
            ...results,
            [fullPath]: {
              label: cont.category,
              related: cont.tags
            }
          }
        } else {
          noConfig.push(fullPath)
        }

        traverse(fullPath)
      }
    }
  }

  traverse(directory)

  return {
    results,
    noConfig
  }
}

// Example usage:
const dirs = directories('./contents')

// THIS CREATES THE BREADCRUMBS AND ISN'T PART OF THIS SCRIPT.
const catPaths = [
  'contents',
  'contents/browser', // curr category for snippet. ie contents/browser/snippet.md
  'contents/browser/css',
  'contents/subsystem/test1/test2',
]

// Get the breadcrumbs
const split = catPaths[3].split('/')

const fn = (split) => (acc, curr, i) => {
  const key = split.slice(split, i + 1).join('/')
  return !dirs.results[key] ? acc : [ ...acc,  dirs.results[key].label ]
}

const breadcrumbs = split.reduce(fn(split), []).join(' > ')

console.log('--- CATEGORIES --------------------------------------------')
console.log(dirs.results)
// console.log(dirs.noConfig)

console.log('\n--- BREADCRUMBS -------------------------------------------')
console.log(catPaths[3])
console.log(breadcrumbs)
