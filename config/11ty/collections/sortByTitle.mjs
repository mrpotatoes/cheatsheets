export default (collectionApi) => {
  return collectionApi.getAll()
    .filter(function (item) {
      let extension = item.inputPath.split('.').pop();
      return extension === 'md';
    })
    .sort(function (a, b) {
      return a.data.title - b.data.title;
    });
}
