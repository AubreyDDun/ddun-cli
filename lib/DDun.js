#!/usr/bin/env node
const { Command } = require('commander')

module.exports = class DDun {
  constructor() {
    this.cmd = new Command()
  }

  run() {
    const pkg = require('../package.json')
    this.cmd
      .version(pkg.version)
      .command('init [outDir]', 'App framework initialization', { isDefault: true })
      .command('module [type] [name]', 'Module files and snippets generation', { isDefault: true })
    this.cmd.parse(process.argv)
  }
}
