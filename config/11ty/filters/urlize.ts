
export default (str: string): string =>
  (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
