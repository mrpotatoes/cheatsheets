module.exports = {
  help: `
    This script is a way to create new cheetsheets. Must have a category (use any case).
    Important: This script creates the 'contents/test' if it does not exist.

    Examples:

    # 1. Creates the 'contents/test' directory and a placeholder.md file
    yarn new test 
    
    # 2. Creates a "some-title.md" file within a category
    yarn new test "Some Title"
  `,

  category: `
---
layout: layouts/category.njk
title: {{ category }}
eleventyExcludeFromCollections: true
---
`.trim(),

post: `
---
layout: layouts/post.njk
title: {{ postTitle }}
category: {{ category }}
---

# {{ postTitle }}
`.trim()
}
