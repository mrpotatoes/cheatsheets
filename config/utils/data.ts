import yaml from 'yaml'
import _ from 'lodash'
import fs from 'fs'
import memoize from 'memoize'
import { fn, GenericObject } from '@mytypes/utils'
import { Base, CategoryTree, FuzzySearch, YamlObject } from '@mytypes/categories'

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
 * The categories object
 *
 * @returns
 */
export const tree = (): YamlObject<CategoryTree> => yamlMem('categories.yml')

/**
 * Grouping object
 *
 * TODO: Delete me. Datafile is not required anymore
 * TODO: Find all references and modify them
 *
 * NOTE: This is used in the groups template so i MAY still need this so I'm not sure
 *
 * @returns
 */
export const groups = (): YamlObject<FuzzySearch> => yamlMem('groups.yml')
