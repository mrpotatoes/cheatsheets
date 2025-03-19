module.exports = (collectionApi) => {
  const categories = {};

  // console.log(collectionApi)
  collectionApi.getAll()
    .filter(function (item) {
      let extension = item.inputPath.split('.').pop();
      return extension === 'md';
    })
    .forEach((item) => {
      const category = item.data.category;
      if (!category) {
        return;
      }
      Array.isArray(categories[category])
        ? categories[category].push(item)
        : categories[category] = [item];
    });
  return categories;
}
