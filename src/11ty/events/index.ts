import { execSync } from 'child_process'
import util from 'util'

export default {
  before: () => {},

  // Save something to a file for later.
  after: () => {
    // execSync('', { encoding: 'utf-8' })
  },
}
