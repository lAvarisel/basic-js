module.exports = function countCats(matrix) {
  let result = 0
  for (const array of matrix) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(element === "^^") result++     
    }
  }
  return result
};
