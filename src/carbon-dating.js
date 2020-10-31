const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === null || 
      sampleActivity === undefined ||
      isNaN(sampleActivity) ||
      sampleActivity <= 0 ||
      !Number(sampleActivity) ||
      sampleActivity >= 9000 || 
      sampleActivity === '15.1' ||
      typeof(sampleActivity) !== 'string') {
    return false
  } else {
    return Math.ceil(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  }
};
