const { execSync } = require('child_process');
const util = require('util')

module.exports = {
  after: () => {
    // execSync(`npx pagefind --site cheatsheets --output-subdir assets/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  }
}
