---
title: Click all checkboxes
group: Page Interactions
---
## Why
I often need to just click everything in a page because I'm being lazy or something. I always forget so this is here now. Well, I play Warframe a lot and it's very grindy. I need to keep track of a bunch of things to be efficent. In order to do so I could use something like the [Warframe Foundry](https://warframe-foundry.app/primary) web app and click everything on then undo what I haven't done.

In order to do that I didn't want to click every item manually so I used JS to do the first part of this work.

## Example code
Given this HTML
```html
<div class="checkbox">
  <div>
    <input aria-label="Mastered" (...) type="checkbox" value="">
  </div>
  <label>Mastered</label>
</div>
```

Running this will click all it's buttons
```js
(function() {
  const buttons = document.querySelectorAll('[aria-label="Mastered"]')

  for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i])
    buttons[i].click()
  }
})()
```
