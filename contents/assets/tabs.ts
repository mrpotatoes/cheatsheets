// @ts-nocheck

const inactive = tab => tab.classList.remove('active')
const active = tab => tab.classList.add('active')
const tabClick = tab => tab.addEventListener('click', listener)

const listener = (event) => {
  // Clicked tab
  const tabId = event.target.getAttribute('data-id')
  const containerId = event.target.parentElement.parentElement.getAttribute('data-id')
  const parentQuery = `.tabs-tabs-wrapper[data-id=${containerId}]`

  // Set everything in this thingy to inactive
  document.querySelectorAll(`${parentQuery} .tabs-tab-content`).forEach(inactive)
  document.querySelectorAll(`${parentQuery} .tabs-tabs-header button`).forEach(inactive)

  // Set new items to active
  document.querySelectorAll(`[data-id=${tabId}]`).forEach(active)
}

// Set it up for all my homies
document.querySelectorAll('.tabs-tabs-header button').forEach(tabClick)
