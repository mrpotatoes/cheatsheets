
export function targets(config) { return `./config/11ty/${config}/**`; }
export const basePath = process.env.NODE_ENV == undefined ? '/' : '/cheatsheets';
export const passthroughs = {
  assets: { './config/assets': 'assets' },
  styles: { './config/styles': 'styles' },
};
