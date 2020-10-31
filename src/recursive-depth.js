module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) return 1 + Math.max(...arr.map(x => this.calculateDepth(x)))
    else return 0
  }
};