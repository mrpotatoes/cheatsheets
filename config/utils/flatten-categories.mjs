import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export const transformCategories = (obj, delimiter = '/', prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : ''
    const isObject = typeof obj[key] === 'object'
    const notEmpty = obj[key] !== null
    const isLength = Object.keys(obj[key]).length > 0
    const isMeta = key === 'meta'

    if (isMeta) {
      acc[pre] = obj[key]
    } else if (isObject && notEmpty && isLength) {
      Object.assign(acc, transformCategories(obj[key], delimiter, pre + key))
    }

    return acc
  }, {})

export const yamlData = (dataFile) => {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  const file = path.join(__dirname, '../data', dataFile)
  const doc = yaml.load(fs.readFileSync(file, 'utf8'))

  return doc
}

export const flattenCategories = (doc) => transformCategories(doc)
