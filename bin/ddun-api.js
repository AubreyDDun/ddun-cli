#!/usr/bin/env node
const program = require('commander')
const consola = require('consola')
const moduleGenPlugin = require('../lib/plugins/command-module-generator')

program.parse(process.argv)

const [
  apiName,
] = program.args

if (!apiName) {
  consola.error('请输入 api 模块名')
  process.exit(1)
}

const options = {
  name: apiName,
  module: 'api',
}

moduleGenPlugin(options)
