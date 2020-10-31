module.exports = function repeater(str, options) {
  let result = ''
  let curStr = ''
  str === null ? curStr = 'null' : curStr = str.toString()
  if (options.addition !== undefined) {
    let addSepar = ''
    let fullSepar = ''
    if (options.additionSeparator !== null && options.additionSeparator !== undefined) {
      addSepar = options.additionSeparator
    } else addSepar = "|"
    if (options.additionRepeatTimes !== null && options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
          fullSepar === '' ? fullSepar += `${options.addition}` : fullSepar += `${addSepar}${options.addition}`
      }
    } else fullSepar += `${options.addition}`
    if (options.repeatTimes === null || 
      options.repeatTimes === undefined ||
      options.repeatTimes === 0) {
        fullSepar === '' ? result = curStr : result = `${curStr}${fullSepar}`
        return result
    } else {
      for (let i = 0; i < options.repeatTimes; i++) {
        if(options.separator === null ||
          options.separator === undefined) {
            result === '' ? result = `${curStr}${fullSepar}` : result += `+${curStr}${fullSepar}`
          }
        else {
          result === '' ? result = `${curStr}${fullSepar}` : result += `${options.separator}${curStr}${fullSepar}`
        }
      }
    }
  }
  else {
    if (options.repeatTimes === null || 
        options.repeatTimes === undefined ||
        options.repeatTimes === 0) {
      return curStr
    }
    else {
      for (let i = 0; i < options.repeatTimes; i++) {
        if(options.separator === null ||
          options.separator === undefined) {
            result === '' ? result = `${curStr}` : result += `+${curStr}`
          }
        else {
          result === '' ? result = `${curStr}` : result += `${options.separator}${curStr}`
        }
      }
    }
  }
  return result
};
  