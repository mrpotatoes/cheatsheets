const { execSync } = require('child_process');
const util = require('util')

module.exports = {
  // Save something to a file for later.
  after: () => {
    // execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  }
}
