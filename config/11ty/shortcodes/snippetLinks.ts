export default (collection, cat) => {
  if (!collection[cat]) {
    return ''
  }

  const links = collection[cat].map(e => `<li><a href="${e.url}">${e.title}</a></li>`)

  return links.join('')
}
