module.exports = {
  getOutDir(type, target) {
    if (type === 'component') {
      return target
    }
    return './'
  }
}
