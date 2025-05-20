import yaml from 'yaml'

export default {
  exts: 'yml, yaml',
  parse: (contents: string) => yaml.parse(contents),
}
