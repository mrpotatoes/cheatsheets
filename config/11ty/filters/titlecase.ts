export default (str: string): string => {
  if ((str === null) || (str === ''))
    return ''
  else
    str = str.toString()

  return str.replace(/\w\S*/g, (txt: string) => (
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ))
}
