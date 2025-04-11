export const message = (message, debug = false) => {
  if (!debug) {
    console.log(message)
  } else {
    throw new Error(message)
  }
}
