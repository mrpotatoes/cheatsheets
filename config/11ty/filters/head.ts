// TODO: Fix me. Am I even being used?
export default (array: any[], n: number): any[] => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  return (n < 0) ? array.slice(n) : array.slice(0, n);
}
