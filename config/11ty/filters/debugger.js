module.exports = (...args) => {
  // console.clear()
  // execSync("clear && printf '\e[3J'")

  console.log('-- DEBUGGER -------------------------------------')
  console.log('args', args[0])
  // console.log('args', ...args)
  console.log('-------------------------------------------------\n')
  debugger;
}
