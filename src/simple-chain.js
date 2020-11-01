const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length()
  },
  addLink(value) {
    if (value !== null) {
      this.chain.push(value.toString())
    } else {
      this.chain.push('null')
    }
    return this
  },
  removeLink(position) {
    if(position <= 0 ||
      !Number.isInteger(position)) {
        this.chain = []
        throw Error ('error')
      }
      else {
        delete this.chain[position-1]
        this.chain.splice([position-1], 1)
      }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = ''
    this.chain.map(x => result === '' ? result = `( ${x} )` : result += `~~( ${x} )`)
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
