// @ts-nocheck
import Fuse from 'fuse.js'
import fuzzysort from 'fuzzysort'
import { debounce } from 'lodash'

const DEBOUNCE = 500

// TODO: Handle the case that if a value exists in input run the fuzzy search.
// TODO: Please use templates
// TODO: Please use a transform on this in the passthrough()
const crumbsReadable = (crumbs) => crumbs.map(crumb => crumb.title).join(' > ')
const groupUrl = (res, snippet) => `<p><b><a href="/code/tips/${res.cat}">${snippet}</b></p>`
const snips = (r) => r.map(e => `<li><a href="${e.url}">${e.title}</a></li>`).join('')

const resSimplified = (results) => results.map(e => ({
  title: e.item.title,
  url: e.item.url,
  cat: e.item.cat,
  crumbs: e.item.crumbs.map(e => e.title).join(' > ')
}))

const resTpl = (results) => Object.keys(results)
  .map(key => `<div class="snippet-group-left"><p>${groupUrl(results[key][0], key)}</p><ul>${snips(results[key])}</ul></div>`)
  .join('')

const filteredResults = (results) => results.reduce((acc, curr) => {
  const cat = crumbsReadable(curr.item.crumbs)
  const next = {
    title: curr.item.title,
    crumbs: crumbsReadable(curr.item.crumbs),
    url: curr.item.url,
    group: curr.item.group,
    cat: curr.item.cat,
  }

  if (acc[cat] === undefined) {
    acc[cat] = []
  }

  return {
    ...acc,
    [cat]: [
      ...acc[cat],
      next,
    ],
  }
}, {})

const filterEvent = (fuse) => (e) => {
  const hasText = e.target.value !== ''
  const searchResults = fuse.search(e.target.value).slice(0, 50)
  const results = filteredResults(searchResults)
  const resCount = `<p>[Results: ${searchResults.length}]</p>`
  const resNone = (hasText) ? '<p>[Results: 0] No results for search value</p>' : ''
  const stuff = `<div class="snippet-group-container">${resTpl(results)}</div?`
  const output = (searchResults.length > 0) ? `${resCount} ${stuff}` : resNone

  document.getElementById('category-navigation').style.display = hasText ? 'none' : 'block'
  document.getElementById('results').innerHTML = output
}

const filterEvent2 = (fuse) => (e) => {
  const hasText = e.target.value !== ''
  const searchResults = fuse.search(e.target.value)//.slice(0, 50)
  const results = filteredResults(searchResults)
  const resCount = `<p>[Results: ${searchResults.length}]</p>`
  const resNone = (hasText) ? '<p>[Results: 0] No results for search value</p>' : ''
  const stuff = `<div class="snippet-group-container">${resTpl(results)}</div?`
  const output = (searchResults.length > 0) ? `${resCount} ${stuff}` : resNone

  document.getElementById('category-navigation').style.display = hasText ? 'none' : 'block'
  document.getElementById('results').innerHTML = output
}

const searchEvent = (json) => {
  const fuseOptions = { keys: ['cat', 'title'] }
  const fuse = new Fuse(json, fuseOptions)

  document
    .getElementById('search')
    .addEventListener('input', debounce(filterEvent2(fuse), DEBOUNCE))
    // .addEventListener('input', filterEvent(fuse))
}

// TODO: Fix this so it gets the correct URL
fetch(`${path}assets/fuzzy.json`)
  .then(response => response.json())
  .then(searchEvent)
