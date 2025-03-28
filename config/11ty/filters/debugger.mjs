export default (...args) => {
  if (!args[0]) return

  console.log('-- DEBUGGER -------------------------------------')
  console.log('args', args[0])
  console.log('-------------------------------------------------\n')
  // debugger
}
