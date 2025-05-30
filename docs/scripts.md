# Creating Scripts

## Script list
- `preinstall.sh`
- `start-dev.sh`
- `clean.sh`

## `start-dev.sh`
The main issue here is for some reason this script doesn't work as expected but translated and put right into the `package.json` as a script it works just fine. Not sure what is happening here but something to look into later.

```sh
#!/bin/sh
clear

# tsx watch \
node_modules/.bin/tsx watch \
  # TSX arguments
  --tsconfig ./config/tsconfig.json \
  # --include ./contents/* \
  # --include ./config/styles/* \
  # index.js
  index.ts

  # 11ty arguments
  # node_modules/@11ty/eleventy/cmd.cjs \
  # --config=./config/11ty/eleventy.config.ts \
  # --quiet \
  # --serve
```
