export const targets = (config) => `./config/11ty/${config}/**`

export const basePath = process.env.NODE_ENV == undefined ? '/' : '/cheatsheets'

export const passthroughs = {
  assets: { './config/assets': 'assets' },
  styles: { './config/styles': 'styles' },
}

export const urls = {
  category: '/code/tips/',
  sansTrailing: '/code/tips',
}
