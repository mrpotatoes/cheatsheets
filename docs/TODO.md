### TODOs
| Filename | line # | TODO |
|:------|:------:|:------|
| [./config/types/11ty.ts](./config/types/11ty.ts#L4) | 4 | Add missing types: https://github.com/panoply/e11ty/blob/master/packages/11ty.ts/index.ts |
| [./config/types/categories.ts](./config/types/categories.ts#L22) | 22 | Validate if this typing is correct. I feel that it is recursive. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L50) | 50 | Since the flattened array would be memoized I should remove the |
| [./config/utils/categories.ts](./config/utils/categories.ts#L63) | 63 | Convert to a different type of iterator (reducer) |
| [./config/utils/categories.ts](./config/utils/categories.ts#L104) | 104 | I don't understand why checking if properties exist set them manually |
| [./config/utils/categories.ts](./config/utils/categories.ts#L117) | 117 | Make this part of the error messaging. |
| [./config/utils/categories.ts](./config/utils/categories.ts#L149) | 149 | The types here are all fubar'd. This is used a lot so I need to figure this out |
| [./config/utils/categories.ts](./config/utils/categories.ts#L164) | 164 | Can I clean this up somehow? |
| [./config/utils/categories.ts](./config/utils/categories.ts#L175) | 175 | Memoize |
| [./config/utils/categories.ts](./config/utils/categories.ts#L176) | 176 | Curry so I can call it simpler |
| [./config/utils/data.ts](./config/utils/data.ts#L58) | 58 | Delete me. Datafile is not required anymore |
| [./config/utils/data.ts](./config/utils/data.ts#L59) | 59 | Find all references and modify them |
| [./config/utils/variables.ts](./config/utils/variables.ts#L10) | 10 | Add a json global link |
| [./config/layouts/snippet.njk](./config/layouts/snippet.njk#L12) | 12 | Convert this to a partial or a WebC component (partial makes more sense imo) |
