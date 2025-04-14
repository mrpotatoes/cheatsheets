import yaml from 'js-yaml'
import _ from 'lodash'
import fs from 'fs'
import memoize from 'memoize'
import { fn, GenericObject } from '@mytypes/utils'
import { Core } from '@mytypes/categories'

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
export const yamlData = memoize((dataFile: string): Core => {
  const file = directory('config/data', dataFile)
  const doc = yaml.load(fs.readFileSync(file, 'utf8')) as Core

  return doc
})

/**
 * The categories object
 *
 * @returns
 */
export const tree = (): Core => yamlData('categories.yml')

/**
 * Grouping object
 * @returns
 */
export const groups = (): Core => yamlData('groups.yml')
