/**
 * A filter to normalize a url string
 */
export default (str: string): string =>
  (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
