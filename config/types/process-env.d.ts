declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      DEVELOPMENT: boolean
      // add more environment variables and their types here
    }
  }
}
