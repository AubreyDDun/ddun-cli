#!/usr/bin/env node
const { Command } = require('commander')
const pkg = require('../package.json')

module.exports = class DDun {
  constructor() {
    this.cmd = new Command()
  }

  run() {
    this.cmd
      .version(pkg.version)
      .command('init [outDir]', '前端工程初始化')
      .command('api [api-module-name]', 'API 模块初始化')
      .command('comp [component-name]', '组件初始化')
      .command('store [store-module-name]', 'store module 初始化')
    this.cmd.parse(process.argv)
  }
}
