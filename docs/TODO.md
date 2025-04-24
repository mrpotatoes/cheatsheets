### TODOs
| Filename | line # | TODO |
|:------|:------:|:------|
| [./config/11ty/eleventy.config.ts](./config/11ty/eleventy.config.ts#L13) | 13 | Move these environment files somewhere else |
| [./config/types/11ty.ts](./config/types/11ty.ts#L4) | 4 | Add missing types: https://github.com/panoply/e11ty/blob/master/packages/11ty.ts/index.ts |
| [./config/types/categories.ts](./config/types/categories.ts#L22) | 22 | Validate if this typing is correct. I feel that it is recursive. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L27) | 27 | Move this function to elsewhere. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L77) | 77 | Since the flattened array would be memoized I should remove the |
| [./config/utils/categories.ts](./config/utils/categories.ts#L90) | 90 | Convert to a different type of iterator (reducer) |
| [./config/utils/categories.ts](./config/utils/categories.ts#L131) | 131 | I don't understand why checking if properties exist set them manually |
| [./config/utils/categories.ts](./config/utils/categories.ts#L144) | 144 | Make this part of the error messaging. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L150) | 150 | I think this can be merged with the group condition. If one doesn't |
| [./config/utils/categories.ts](./config/utils/categories.ts#L178) | 178 | The types here are all fubar'd. This is used a lot so I need to figure this out |
| [./config/utils/categories.ts](./config/utils/categories.ts#L193) | 193 | Can I clean this up somehow? |
| [./config/utils/categories.ts](./config/utils/categories.ts#L204) | 204 | Memoize |
| [./config/utils/categories.ts](./config/utils/categories.ts#L205) | 205 | Curry so I can call it simpler |
| [./config/utils/data.ts](./config/utils/data.ts#L75) | 75 | Delete me. Datafile is not required anymore |
| [./config/utils/data.ts](./config/utils/data.ts#L76) | 76 | Find all references and modify them |
| [./config/utils/variables.ts](./config/utils/variables.ts#L14) | 14 | Add a json global link |
| [./config/layouts/snippet.njk](./config/layouts/snippet.njk#L12) | 12 | Convert this to a partial or a WebC component (partial makes more sense imo) |
| [./contents/assets/fuzzy.ts](./contents/assets/fuzzy.ts#L5) | 5 | Handle the case that if a value exists in input run the fuzzy search. |
| [./contents/assets/fuzzy.ts](./contents/assets/fuzzy.ts#L6) | 6 | Please use templates |
| [./contents/assets/fuzzy.ts](./contents/assets/fuzzy.ts#L7) | 7 | Please use a transform on this in the passthrough() |
| [./contents/assets/fuzzy.ts](./contents/assets/fuzzy.ts#L81) | 81 | Fix this so it gets the correct URL |
