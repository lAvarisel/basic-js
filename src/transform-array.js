module.exports = function transform(arr) {
  let result = []
  let discardNext = false
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!Array.isArray(arr)) return Error('Error')
    if (arr[i] !== undefined) {
      switch (arr[i]) {
        case '--discard-next':
          i++
          break;
        case '--discard-prev':
          if (arr[i-2] !== '--discard-next') {
            result.pop()
          }
        break;
        case '--double-next':
          if(arr[i+1] !== undefined) {           
            result.push(arr[i+1])
          }
          break;
        case '--double-prev':
          if(arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
            result.push(arr[i-1])
          }
          break;
        default:
          result.push(arr[i])
          break;
      }
    }
  }
  return result
};
