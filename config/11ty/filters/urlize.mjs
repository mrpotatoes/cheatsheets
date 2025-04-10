
export default (str) =>
  (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
