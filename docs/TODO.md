### TODOs
| Filename | line # | TODO |
|:------|:------:|:------|
| [./config/types/11ty.ts](./config/types/11ty.ts#L4) | 4 | Add missing types: https://github.com/panoply/e11ty/blob/master/packages/11ty.ts/index.ts |
| [./config/types/categories.ts](./config/types/categories.ts#L22) | 22 | Validate if this typing is correct. I feel that it is recursive. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L24) | 24 | Move this function to elsewhere. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L74) | 74 | Since the flattened array would be memoized I should remove the |
| [./config/utils/categories.ts](./config/utils/categories.ts#L87) | 87 | Convert to a different type of iterator (reducer) |
| [./config/utils/categories.ts](./config/utils/categories.ts#L128) | 128 | I don't understand why checking if properties exist set them manually |
| [./config/utils/categories.ts](./config/utils/categories.ts#L141) | 141 | Make this part of the error messaging. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L173) | 173 | The types here are all fubar'd. This is used a lot so I need to figure this out |
| [./config/utils/categories.ts](./config/utils/categories.ts#L188) | 188 | Can I clean this up somehow? |
| [./config/utils/categories.ts](./config/utils/categories.ts#L199) | 199 | Memoize |
| [./config/utils/categories.ts](./config/utils/categories.ts#L200) | 200 | Curry so I can call it simpler |
| [./config/utils/data.ts](./config/utils/data.ts#L67) | 67 | Delete me. Datafile is not required anymore |
| [./config/utils/data.ts](./config/utils/data.ts#L68) | 68 | Find all references and modify them |
| [./config/utils/variables.ts](./config/utils/variables.ts#L10) | 10 | Add a json global link |
| [./config/layouts/snippet.njk](./config/layouts/snippet.njk#L12) | 12 | Convert this to a partial or a WebC component (partial makes more sense imo) |
