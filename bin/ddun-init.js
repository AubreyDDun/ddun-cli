#!/usr/bin/env node
const initPlugin = require('../lib/plugins/command-init')
const program = require('commander')

program.parse(process.argv)

const [
  outDir,
] = program.args

if (!outDir) {
  console.error('Please provide outDir for the new program.')
  process.exit(1)
}

const options = {
  outDir,
}

initPlugin(options)