export const targets = (config: string): string => `./config/11ty/${config}/**`

export const basePath = process.env.NODE_ENV == undefined ? '/' : '/cheatsheets'

export const passthroughs = {
  assets: { './config/assets': 'assets' },
  styles: { './config/styles': 'styles' },
}

// TODO: Add a json global link

export const urls = {
  category: '/code/tips/',
  sansTrailing: '/code/tips',
}
