#!/usr/bin/env node
const program = require('commander')
const consola = require('consola')
const moduleGenPlugin = require('../lib/plugins/command-module-generator')

program.parse(process.argv)

const [
  componentName,
] = program.args

if (!componentName) {
  consola.error('请输入组件名')
  process.exit(1)
}

const options = {
  name: componentName,
  module: 'component',
}

moduleGenPlugin(options)
