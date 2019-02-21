require('colors')
const rp = require('request-promise')
const ora = require('ora')
const { INFO } = require('../constants/log-levels')
const log = require('../helpers/log')
const { api: { authKey, endpoint } } = require('../../config')

const headers = {
  Authorization: `Basic ${authKey}`,
  'Content-Type': 'application/json',
}

const spinner = ora()


const getIssueData = (issueId) => {
  spinner.start('Finding issue'.yellow)

  return rp({
    url: `${endpoint}${issueId}`,
    headers,
  })
    .then((data) => {
      const parsedData = JSON.parse(data)
      const { key, fields: { issuetype, summary } } = parsedData

      spinner.succeed('Found issue!'.green)
      log(`Key: ${key}`, INFO)
      log(`Issue Type: ${issuetype.name}`, INFO)
      log(`Summary: ${summary}`, INFO)

      return parsedData
    })
    .catch(() => {
      spinner.fail('Oops. Looks like that issue does not exist.'.red)
      process.exit(0)
    })
}

module.exports = getIssueData
