module.exports = (collectionApi) => {
  const categories = [];
  collectionApi.getAll()
    .filter(function (item) {
      let extension = item.inputPath.split('.').pop();
      return extension === 'md';
    })
    .forEach((item) => {
      const category = item.data.category;
      if (category && !categories.includes(category)) {
        categories.push(category);
      }
    });
  return categories.sort();
}
