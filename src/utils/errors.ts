/**
 * Provide an error message (or exception)
 *
 * @param message The message string
 * @param debug Report to console or throw exception
 */
export const message = (message: string, debug = false): void => {
  if (!debug) {
    console.log(message)
  } else {
    throw new Error(message)
  }
}
