#!/usr/bin/env node
const path = require('path')
const sao = require('sao')

module.exports = (options) => {
  const {
    outDir,
  } = options

  const generator = path.resolve(__dirname, './')
  console.log(`> Generating project in ${outDir}`)

  /**
   * remote repo: username/repo
   * local: path
   * npm:
   */

  sao({
    generator,
    outDir,
    logLevel: 2,
    ...options,
    defaultName: outDir,
  })
    .run()
    .catch((err) => {
      console.trace(err)
      process.exit(1)
    })
}
