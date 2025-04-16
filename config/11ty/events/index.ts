import { execSync } from 'child_process'
import util from 'util'

export default {
  before: () => {},
  
  // Save something to a file for later.
  after: () => {
    // execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  },
}
