// @ts-nocheck
import fuzzysort from 'fuzzysort'
import { resTpl, remapped } from '@utils/fuzzy-templates'
import { debounce } from 'lodash'

/**
 *
 */
const searchOptions = {
  keys: ['title', 'group', 'crumbs2'],
  limit: 100,
  threshold: 0.5,
}

/**
 *
 * @param json
 * @returns
 */
const filterEvent = (json) => (e) => {
  const hasText = e.target.value !== ''
  const search = fuzzysort.go(e.target.value, json, searchOptions)
  const normalized = remapped(search)
  const resCount = `<p>[Results: ${search.length}]</p>`
  const resNone = (hasText) ? '<p>[Results: 0] No results for search value</p>' : ''
  const stuff = `<div class="snippet-group-container">${resTpl(normalized)}</div>`
  const output = (search.length > 0) ? `${resCount} ${stuff}` : resNone

  document.getElementById('category-navigation').style.display = hasText ? 'none' : 'block'
  document.getElementById('results').innerHTML = output
}

/**
 *
 * @param json
 */
const searchEvent = (json) => {
  document
    .getElementById('search')
    .addEventListener('input', debounce(filterEvent(json), 500))
}

// TODO: Fix this so it gets the correct URL
fetch(`${path}assets/fuzzy.json`)
  .then(response => response.json())
  .then(searchEvent)
