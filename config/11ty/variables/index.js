
module.exports = {
  targets: (config) => `./config/11ty/${config}/**`,

  // Not sure what is going on here with the prod version and local builds
  basePath: process.env.NODE_ENV == undefined ? '/' : '/cheatsheets',

  passthroughs: {
    assets: { './config/assets': 'assets' },
    styles: { './config/styles': 'styles' },
  },
}
