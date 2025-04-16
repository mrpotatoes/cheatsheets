import { Base } from '@mytypes/categories'

/**
 * TODO: Use a template instead
 * TODO: Do I still need this?
 */
export default (collection: any, cat: string): string => {
  if (!collection[cat]) {
    return ''
  }

  // TODO: Can I do this with a WebC component instead?
  const links = collection[cat].map((e: Base) => `<li><a href="${e.url}">${e.title}</a></li>`)

  return links.join('')
}
