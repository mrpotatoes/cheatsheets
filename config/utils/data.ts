import yaml from 'yaml'
import _ from 'lodash'
import fs from 'fs'
import memoize, { memoizeClear } from 'memoize'
import { fn, GenericObject } from '@mytypes/utils'
import { CategoryTree, FuzzySearch, YamlObject } from '@mytypes/categories'

/**
 * Takes a key/value object and sets every key to the supplied function
 *
 * @param fn A callback that sets the data
 *
 * @returns An empty object
 */
export const emptyObject = (fn: fn) => (object: GenericObject): GenericObject =>
  _.reduce(object, (result, _, key) => ({
    ...result,
    [key]: fn(),
  }), {})

/**
 * Get a path based on the project working root
 *
 * @param {*} path The working directory
 * @param {*} file The filename
 * @returns
 */
export const directory = (path: string, file: string): string =>
  !file
    ? `${process.env.PWD}/${path}`
    : `${process.env.PWD}/${path}/${file}`

/**
 * Retrieve a configuration object and return an object literal.
 *
 * @param dataFile
 * @returns
 */
export const yamlData = <T>(dataFile: string): YamlObject<T> => {
  const file = directory('config/data', dataFile)
  const doc = yaml.parse(fs.readFileSync(file, 'utf8'))

  return doc
}

const yamlMem = memoize(yamlData)

/**
 *
 * @param data
 * @param dataFile
 * @returns
 */
// @ts-ignore
export const saveYaml = (data, dataFile) => {
  const file = directory('config/data', dataFile)
  const doc = yaml.stringify(data)
  fs.writeFileSync(file, doc)

  return doc
}

/**
 * The categories object
 *
 * @returns
 */
export const tree = (): YamlObject<CategoryTree> => yamlMem('categories.yml')

/**
 * Grouping object
 *
 * @param fresh Skip memoization
 *
 * TODO: Delete me. Datafile is not required anymore
 * TODO: Find all references and modify them
 *
 * NOTE: This is used in the groups template so i MAY still need this so I'm not sure
 *
 * @returns
 */
export const groups = (fresh = false): YamlObject<FuzzySearch> => {
  if (fresh) {
    memoizeClear(yamlMem)
  }

  return yamlMem('groups.yml')
}

/**
 *
 * @param snippets
 * @returns
 */
export const saveGroups = (snippets: any): any => {
  const isSame = !_.isEqual(groups(), snippets)

  if (isSame) {
    groups(true) // Get the updated file.
    saveYaml(snippets, 'groups.yml')
  }

  return snippets
}
