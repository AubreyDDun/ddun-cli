#!/usr/bin/env node

const moduleGenPlugin = require('../lib/plugins/command-module-generator')
const program = require('commander')

program.parse(process.argv)

const [
  moduleType,
  moduleName,
] = program.args

if (!moduleType || !moduleName) {
  console.error('请确保参数完整 ddun module [type] [name]')
  process.exit(1)
}

const options = {
  name: moduleName,
  type: moduleType.toLowerCase(),
}

moduleGenPlugin(options)