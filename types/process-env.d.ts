declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined

      DEVELOPMENT: string
      DEBUG: string
      SNIPPET_URL: string
      BASE_PATH: string
      PORT: string
      OUTPUT: string
    }
  }
}

declare global {
  interface Window {
    path: string
    base: string
  }
}

export { }
