---
layout: layouts/post.njk
title: Formatting
category: SQL
---

## Short statements
Reasoning

```sql
SELECT *
FROM <TABLE>
WHERE <CLAUSE>
LIMIT 10
```
## Long statements
Reasoning

```sql
SELECT 
  tb.id as ID,
  tb.name,
FROM
  <TABLE> as tb
    INNER JOIN tb.id ON <TABLE2>.id
    INNER JOIN <TABLE2>.id ON <TABLE3>.name
WHERE 
  tb.id > 30
LIMIT 10
```
