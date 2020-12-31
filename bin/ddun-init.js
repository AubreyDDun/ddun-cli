#!/usr/bin/env node
const program = require('commander')
const consola = require('consola')
const initPlugin = require('../lib/plugins/command-init')

program.parse(process.argv)

const [
  outDir,
] = program.args

if (!outDir) {
  consola.error('请输入项目名')
  process.exit(1)
}

const options = {
  outDir,
}

initPlugin(options)
