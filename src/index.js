#! /usr/bin/env node

const adze = require('commander')
const { version } = require('../package')

const branch = require('./commands/branch')

adze
  .version(version)

adze
  .command('branch <ticketId>')
  .description('create branch from a JIRA issue')
  .action(branch)

adze.parse(process.argv)

if (!process.argv.slice(2).length) {
  adze.help()
}
