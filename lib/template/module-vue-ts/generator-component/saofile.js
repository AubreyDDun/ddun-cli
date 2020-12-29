module.exports = {
  prompts() {
    const { sao } = this
    return [
      {
        type: 'text',
        name: 'compName',
        message: 'What is the name of the new component',
        default: sao.opts.camelcaseName,
        // validate:
        filter: val => val.split('-')
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join('').replace(/\s+/ig, '')
      }
    ]
  },

  actions() {
    const { _answers } = this
    return [
      {
        type: 'add',
        files: '**',
      },
      {
        type: 'move',
        patterns: {
          '__comp.tsx': `${_answers.compName}.tsx`,
          '__comp.less': `${_answers.compName}.less`
        }
      }
    ]
  }
}
