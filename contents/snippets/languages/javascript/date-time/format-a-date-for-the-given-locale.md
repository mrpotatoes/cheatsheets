---
title: Format a date for the given locale
---

**JavaScript version**

```js
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);
```

**TypeScript version**

```js
const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);
```

**Example**

```js
format(new Date(), 'pt-BR'); // 06/05/2020
```
