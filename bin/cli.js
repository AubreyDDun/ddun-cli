#!/usr/bin/env node
const consola = require('consola')
const DDun = require('../lib/DDun')

function main() {
  try {
    const ddun = new DDun()
    ddun.run()
  } catch (error) {
    consola.error(error)
    process.exit(1)
  }
}

main()
