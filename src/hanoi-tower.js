module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let speed = 3600/turnsSpeed
  let result = {
    turns: 0,
    seconds: 0
  }
  result.turns = Math.pow(2, disksNumber) - 1
  result.seconds = Math.floor(result.turns * speed)
  return result
};
