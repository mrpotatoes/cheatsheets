---
layout: post.njk
title: Compress Images
tags: 
  - images
  - compress
  - imagemagick
---

## First install `imagemagick`
Use this command to install. You'll also get the `convert` binary which is what you'd use.
```bash
brew install imagemagick
```

## Example Command
```sh
convert <image> -quality 30% IMG20220517163515-2.jpg
```

## Reference Links
- [Reduce File Size of Images in Linux - CLI and GUI methods
](https://www.digitalocean.com/community/tutorials/reduce-file-size-of-images-linux)
- [Link to Homebrew Formulae](https://formulae.brew.sh/formula/imagemagick)
