---
title: Markdown Test - Collapsible
permalink: markdown-tests/collapsible/
layout: post.vto
---

VuePress Theme Hope is !!powerful!!.

VuePress Theme Hope is !!powerful!!.

VuePress Theme Hope is !!powerful!!.

VuePress Theme Hope is !!powerful!!.

## Plugins
I'm using primarily the [`@mdit/plugin-*`](https://mdit-plugins.github.io/) plugins for this feature

- [x] Callouts
- [x] Columns (custom)
- [x] Tabs (custom)
- [ ] Carousel (custom)
- [x] Images (custom)
- [x] Super Script
- [x] Sub Script
- [ ] Footnotes
- [ ] Task lists
- [ ] Spoiler
- [x] Collapsible

## Additional
There is additional work required to get some of these plugins to work. Primarily that work is styling but, like tabs and carousels, require some extra JavaScript to get them to work. I want to make sure that code lives and compiles correctly.
- [ ] All js code in `index.vto` should live in `assets/js/mdit.*.ts`
- [ ] Take example content in here and turn it into snippets
- [ ] Delete the `contents/_test-pages/` directory.

## Won't Do
I won't be doing much with the `css` as I am moving away from my current css framework to in the
[`[feature/css-framework] Deciding on a CSS Framework`](https://github.com/mrpotatoes/cheatsheets/pull/32) PR

## Regular
+++ Click me!
Hidden text
+++

## Open State
++> Click me!
Hidden text
++>

## Nesting
## Closed
++++ Click me!
Hidden text
+++ Nested
Inner hidden text
+++
++++

## Open
+++> Click me!
Hidden text
+++ Nested
Inner hidden text
+++
+++>


Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference.

[^first]: Footnote **can have markup**

    and multiple paragraphs[^second].

[^second]: Footnote text.

