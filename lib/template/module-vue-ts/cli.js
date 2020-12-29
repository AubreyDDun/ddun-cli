#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const { getOutDir } = require('./utils')

module.exports = async (options) => {
  const {
    name,
    type,
  } = options
  const generator = path.resolve(__dirname, `./generator-${type}`)
  const camelcaseName = name.split('-')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join('')
  const outDir = getOutDir(type, camelcaseName)

  console.log(`> Generating files and code snippets of [${type}] named ${camelcaseName}...`)

  await sao({
    generator: 'npm:@yy/fet-template-template',
    outDir,
    logLevel: 2,
    ...{
      ...options,
      camelcaseName,
      name,
    }
  })
    .run()
    .catch((err) => {
      console.trace(err)
      process.exit(1)
    })

  console.log(`> Generator run over :)\n> Check the result in the directory => ${path.resolve(process.cwd(), outDir)}`)
}
