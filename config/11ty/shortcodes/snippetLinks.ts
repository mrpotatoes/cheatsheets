import { BaseObject } from '@mytypes/categories'

// TODO: Fix me
export default (collection: any, cat: string): string => {
  if (!collection[cat]) {
    return ''
  }

  const links = collection[cat].map((e: BaseObject) => `<li><a href="${e.url}">${e.title}</a></li>`)

  return links.join('')
}
