# Website
Brainstorming aboot website structure.

## Note
I'll want to change the url since it won't be just `Cheatsheets` and more of my personal website for everything. Yippie

## Sections / URLs
### Main
```
/snippets
/blog
/about
/404
/gallery
/projects
```

### Optional
```
/docs (or /guides)
/playground
/resume
/recipes
/projects
  /car
  /sewing
  /welding
  /fashion
```

## Directory Structure
Something like this makes sense to me

```
contents/
  _pages/
    about.njk
    404.njk
    redirects.njk
    resume.njk
  
  snippets/
  blog/
  projects/
  guides/
  recipes/

  index.njk
```

## What's Next
I need to create a `contents/pages/*.md` template files all with their specific `permalinks`. This'll keep things nice and neat.
