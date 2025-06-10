---
title: Enhancement - Images
layout: post.vto
---

## About
I need to be able to use and process images files using `markdown` syntax (`![]()`).

```ts
export const imgs = (md: MarkdownIt) => {
  md.use(markdownItEleventyImg, {
    imgOptions: { /* ... */ },
    globalAttributes: { /* ... */ },,

    resolvePath: (filepath: string, env: EleventyEnv) =>
      (filepath.charAt(0) === '/')
        ? path.join(workingDir(), 'config/', filepath)
        : path.join(path.dirname(env.page.inputPath), filepath),
  })
}
```
