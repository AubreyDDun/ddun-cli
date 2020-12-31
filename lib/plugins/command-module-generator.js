const ModuleGenerator = require('ddun-generator-module')
const supportedType = ['component', 'api']

module.exports = (options = {}) => {
  const {
    type,
  } = options

  if (supportedType.indexOf(type) < 0) {
    console.warn(`[${type}] generator will be supported in the future :)`)
    process.exit(1)
  }

  if (type === 'component' || type == 'api') {
    ModuleGenerator(options)
  }
}