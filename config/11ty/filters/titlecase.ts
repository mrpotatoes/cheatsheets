export default (str: string): string | boolean => {
  if ((str === null) || (str === ''))
    return false
  else
    str = str.toString()

  return str.replace(/\w\S*/g, (txt: string) => (
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ))
}
