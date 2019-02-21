#! /usr/bin/env node

const adze = require('commander')
const { version } = require('../package')

const jiraBranch = require('./commands/jira/branch')

adze
  .version(version)

adze
  .command('jira:branch <issueId>')
  .description('create branch from a JIRA issue')
  .action(jiraBranch)

adze.parse(process.argv)

if (!process.argv.slice(2).length) {
  adze.help()
}
