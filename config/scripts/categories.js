/**
 * Links
 *  - https://brandonclapp.github.io/arranging-an-array-of-flat-paths-into-a-json-tree-like-structure/
 *  - https://www.npmjs.com/package/to-path-tree
 *  - https://stackoverflow.com/questions/59049635/how-to-transform-array-of-strings-into-specific-tree-structure-in-javascript
 *  - https://stackoverflow.com/questions/62360475/create-a-tree-from-a-list-of-objects-containing-paths-in-javascript
 *    - This one uses an ID. Would need to remove it.
 *  - https://stackoverflow.com/a/62365586
 *    - I would need to add a bunch of metadata to this one to properly render this bitch
 *  - https://stackoverflow.com/questions/69290300/how-to-convert-an-array-of-paths-to-an-object-in-javascript
 *    - Best one so far but needs some work
 *      - Snippets require their metadata appended to it
 *      - Needs top-level categories to have their own metadata
 *      - I think it will be a good idea to add a children property also
 *      - How to add individual items
 */
console.clear()
const _ = require('lodash')
const fns = require('./_.tmp.fns')

const exampleTree = {
  browser: {
    label: 'Browsers',
    css: { label: 'CSS' },
    dom: { label: 'DOM' },
    html: { label: 'HTML' },
    pwa: { label: 'PWAs' }
  },
  languages: {
    label: 'Languages',
    java: { label: 'Java' },
    javascript: {
      label: 'JavaScript',
      array: { label: 'Arrays' },
      math: { label: 'Math' }
    },
    typescript: { label: 'TypeScript' }
  },
  libraries: {
    label: 'Libraries',
    angular: { label: 'Angular' },
    effect: { label: 'Effect' },
    express: { label: 'Express' },
    jest: { label: 'Jest' },
    react: { label: 'React' },
    redux: { label: 'Redux' },
    xstate: { label: 'xState' }
  },
  sql: { label: 'SQL' },
  subsystem: {
    label: 'Sub System',
    bash: { label: 'Bash' },
    dotfiles: { label: 'Personal Dotfiles' },
    test1: {
      label: 'Test 1',
      test2: {
        label: 'Test 2',
        test3: { label: 'Test 3' }
      }
    }
  }
}

const categoryTree = (directory) => {
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
          const setPath = fullPath.replaceAll('contents/', '').replaceAll('/', '.')

          // Sadly this mutates the object but oh well. My assumption is it's faster this way.
          _.set(results, setPath, { label: cont.category })
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

const tree = categoryTree('./contents')

/**
 * From: https://zguyun.com/blog/how-to-print-nested-object-in-javascript/#using-recursion-to-print-nested-objects
 */
function outputTree(obj, indent = 2) {
  let output = ''

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // console.log(`${' '.repeat(indent)}${key}:`)      
      // output += `${output} ${' '.repeat(indent)}${key }:\n`

      output += outputTree(obj[key], indent + 2)
    } else {
      // console.log(`${' '.repeat(indent)}${key}: ${obj[key]}`)
      output += (`${' '.repeat(indent)}${key}: ${obj[key]}\n`)
    }
  }

  return output
}

// Calling the function to print the nested object
const t = outputTree(tree.results)
console.log('\n-------------------------------------------------')
console.log('\n')
console.log(t)

