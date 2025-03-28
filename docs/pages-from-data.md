# Can I create category pages from data?

Docs: [Create Pages From Data — Eleventy](https://www.11ty.dev/docs/pages-from-data/)

I want to take this structure
```js
{
  browser: {
    css: {
      dom: {},
      reset: {
        deeper: {},
      },
    },
    html: {}
  },
}
```

And end up with these category links
```
/cheatsheets/browser/
/cheatsheets/browser/css/
/cheatsheets/browser/css/dom/
/cheatsheets/browser/css/dom/reset/
/cheatsheets/browser/css/dom/reset/deeper/
/cheatsheets/browser/html/
```

I think this can be done by creating pages using the link above. 

From here I'd link all the snippets that are directly linked to each category. A link would directly go to the snippet page. The snippets themselves could be paginated in each category.

## Next Steps
- I need to formalize the snippet urls
- Formalize the category urls
- Add metadata to all the categories
- Add the snippet links to all the categories
  - Or add the pages to them to have that object to use. Dunno.
- Possibly exclude the `/categories/` link but that depends on the snippet's link

