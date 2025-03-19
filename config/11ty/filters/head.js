module.exports = (array, n) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  return (n < 0) ? array.slice(n) : array.slice(0, n);
}
