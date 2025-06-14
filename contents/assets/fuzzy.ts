import fuzzysort from 'fuzzysort'
import { debounce } from 'lodash'
import { resTpl, remapped } from '@utils/fuzzy-templates'
import { FuzzySearch2 } from '@mytypes/categories'

/**
 *
 */
const searchOptions = {
  keys: ['title', 'group', 'crumbs'],
  limit: 100,
  threshold: 0.5,
}

const eventVal = (e: Event) => (e.target as HTMLInputElement).value

/**
 *
 * @param json
 * @returns
 */
const filterEvent = (json: FuzzySearch2[]) => (e: Event) => {
  const hasText = eventVal(e) !== ''
  const search = fuzzysort.go(eventVal(e), json, searchOptions)

  // @ts-ignore
  const normalized = remapped(search)
  const resCount = `<p>[Results: ${search.length}]</p>`
  const resNone = (hasText) ? '<p>[Results: 0] No results for search value</p>' : ''
  const stuff = `<div class="snippet-group-container">${resTpl(normalized)}</div>`
  const output = (search.length > 0) ? `${resCount} ${stuff}` : resNone

  document.getElementById('category-navigation')!.style!.display = hasText ? 'none' : 'block'
  document.getElementById('results')!.innerHTML = output
}

/**
 *
 * @param json
 */
const searchEvent = (json: FuzzySearch2[]) => {
  document
    .getElementById('search')!
    .addEventListener('input', debounce(filterEvent(json), 500))
}

// TODO: Fix this so it gets the correct URL
// @ts-ignore
fetch(`${path}assets/fuzzy.json`)
  .then(response => response.json())
  .then(searchEvent)
