#! /usr/bin/env node
require('colors')
const adze = require('commander')
const { name, author, version } = require('../package')

const jiraBranch = require('./commands/jira/branch')

adze
  .version(`${name.rainbow} by ${author.green}: ${version}`)

adze
  .command('jira:branch <issueId>')
  .description('create branch from a JIRA issue')
  .action(jiraBranch)

adze.parse(process.argv)

if (!process.argv.slice(2).length) {
  adze.help()
}
