/**
 * Data getters & transformers
 */
import yaml from 'js-yaml'
import _ from 'lodash'
import fs from 'fs'
import memoize from 'memoize'


/**
 * Takes a key/value object and sets every key to the supplied function
 *
 * @param {*} categories
 * @returns
 */
export const emptyObject = (fn) => (categories) =>
  _.reduce(categories, (result, _, key) => ({
    ...result,
    [key]: fn(),
  }), {})

/**
 * Get a path based on the project working root
 *
 * @param {*} path
 * @param {*} file
 * @returns
 */
export const directory = (path, file) => !file ? `${process.env.PWD}/${path}` : `${process.env.PWD}/${path}/${file}`

/**
 * TODO: [OPTIONAL] This should be a curried function that loads either a yaml or json file
 */
export const yamlData = memoize((dataFile) => {
  const file = directory('config/data', dataFile)
  const doc = yaml.load(fs.readFileSync(file, 'utf8'))

  return doc
})

/**
 *
 * @returns
 */
export const tree = () => yamlData('categories.yml')

export const groups = () => yamlData('groups.yml')
