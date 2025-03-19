
module.exports = (str) =>
  (((str === null) || (str === '')) ? '' : `${str}`).toLowerCase()
