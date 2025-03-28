export default (str) => {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();

  return str.replace(/\w\S*/g, (txt) => (
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ));
};
