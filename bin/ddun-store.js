#!/usr/bin/env node
const program = require('commander')
const consola = require('consola')
const moduleGenPlugin = require('../lib/plugins/command-module-generator')

program.parse(process.argv)

const [
  storeModuleName,
] = program.args

if (!storeModuleName) {
  consola.error('请输入 module 名')
  process.exit(1)
}

const options = {
  name: storeModuleName,
  module: 'store',
}

moduleGenPlugin(options)
