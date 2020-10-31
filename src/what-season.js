module.exports = function getSeason(date) {
  let data = {
    'Jan': 'winter',
    'Feb': 'winter',
    'Mar': 'spring',
    'Apr': 'spring',
    'May': 'spring',
    'Jun': 'summer',
    'Jul': 'summer',
    'Aug': 'summer',
    'Sep': 'autumn',
    'Oct': 'autumn',
    'Nov': 'autumn',
    'Dec': 'winter'
  }
  result = null
  if (date === null) {
    throw new Error('Error')
  }
  else if (date === undefined)  {
    return 'Unable to determine the time of year!'
  }
  else if (isNaN(date.valueOf()) && date instanceof Date) throw new Error('Error')

  else if (date instanceof Date) {
    result = data[date.toString().split(' ')[1]]
  }
  if (result === null) {
    throw new Error('Error')
  }
  else {
    return result
  }
};
