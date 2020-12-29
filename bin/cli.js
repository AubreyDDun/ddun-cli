#!/usr/bin/env node
const Dun = require('../lib/DDun')

function main() {
  try {
    const dun = new Dun()
    dun.run()
  } catch (error) {
    console.error(error)

    process.exit(1)
  }
}

main()