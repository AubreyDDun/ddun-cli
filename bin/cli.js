#!/usr/bin/env node
const DDun = require('../lib/DDun')

function main() {
  try {
    const ddun = new DDun()
    ddun.run()
  } catch (error) {
    console.error(error)

    process.exit(1)
  }
}

main()