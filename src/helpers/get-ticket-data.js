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

const getTicketData = (ticketId) => {
  const spinner = ora('Finding issue'.yellow).start()

  return rp({
    url: `${endpoint}${ticketId}`,
    headers,
  })
    .then((data) => {
      const parsedData = JSON.parse(data)
      const { issuetype, summary } = parsedData.fields

      spinner.succeed('Found issue!'.green)
      log(`Key: ${parsedData.key}`, INFO)
      log(`Issue Type: ${issuetype.name}`, INFO)
      log(`Summary: ${summary}`, INFO)

      return parsedData
    })
    .catch(() => {
      spinner.fail('Oops. Looks like that issue does not exist.'.red)
      process.exit(0)
    })
}

module.exports = getTicketData
