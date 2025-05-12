import { isDev } from '@utils/variables'

export default (content: string): string =>
  (isDev())
    ? JSON.stringify(content, null, 2)
    : JSON.stringify(content)
