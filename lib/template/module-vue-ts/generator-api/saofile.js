module.exports = {
  actions() {
    const { opts } = this.sao

    return [
      {
        type: 'add',
        files: '**',
      },
      {
        type: 'move',
        patterns: {
          '__apiModuleName.ts': `${opts.name}.ts`
        }
      }
    ]
  }
}
