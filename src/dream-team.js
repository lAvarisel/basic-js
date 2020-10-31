module.exports = function createDreamTeam(members) {
  let result = ''
  try {
    for (const member of members) {
      if (typeof(member) === "string") {
        result += member.trim().substr(0, 1).toUpperCase()
      }
    }
  } catch (error) {
    return false
  }
  return result.split('').sort().join('')
};
